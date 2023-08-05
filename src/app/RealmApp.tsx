"use client";

import React from "react";
import * as Realm from "realm-web";

const AppContext = React.createContext(null);

export function AppProvider({ children }: { children: any; }) {

  const [app, setApp] = React.useState<any>(null);
  const [currentUser, setCurrentUser] = React.useState<any>(app?.currentUser);
  React.useEffect(() => {
    const initApp = async () => {
      const app = await new Realm.App({ id: process.env.NEXT_PUBLIC_MONGO_APP_ID! });
      setApp(app);
};
    initApp();
  }, []);

  React.useEffect(() => {
    if (app && !app.currentUser) {
      const credentials = Realm.Credentials.anonymous();
      app.logIn(credentials);
    }
    setCurrentUser(app?.currentUser);
  }, [app]);

  const register = React.useCallback(
    async (values: any) => {

    },
    [app]
  )

  const logIn = React.useCallback(
    async (loginValues: any) => {
      const {email, password} = loginValues
      const credEmail = email?.toLowerCase();
      try {
        const credentials = Realm.Credentials.emailPassword(credEmail, password);
        await app.logIn(credentials);
        setCurrentUser(app.currentUser)
      } catch (e) {
        console.log(e);
      }
    },
    [app]
  );

  const logOut = React.useCallback(async () => {
    try {
      const user = app.currentUser;
      await user?.logOut();
      user && (await app.removeUser(user));
    } catch (err) {
      console.error(err);
    }
    // In this App there will only be one logged in user at a time, so
    // the new current user will be null. If you add support for
    // multiple simultaneous user logins, this updates to another logged
    // in account if one exists.
    setCurrentUser(null);
  }, [app]);

  const appContext = React.useMemo(() => {
    return { ...app, currentUser, logIn, logOut, register };
  }, [app, currentUser, logIn, logOut, register]);

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}

export function useApp() {
  const app = React.useContext(AppContext);
  if (!app) {
    throw new Error(
      `No App Services App found. Make sure to call useApp() inside of a <AppProvider />.`
    );
  }
  return app;
}
