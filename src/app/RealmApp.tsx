"use client";

import React from "react";
import * as Realm from "realm-web";

const AppContext = React.createContext(null);

export function AppProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = React.useState<any>();
  const [app, setApp] = React.useState<any>(null);

  React.useEffect(() => {
    setApp(Realm.getApp(process.env.NEXT_PUBLIC_MONGO_APP_ID!));
  }, []);

  React.useEffect(() => {
    if (app && !app.currentUser) {
      const credentials = Realm.Credentials.anonymous();
      const anonUser = app.logIn(credentials);
      setCurrentUser(anonUser);
      console.log(anonUser);
    }
  }, [app]);

  const logIn = React.useCallback(
    async (credentials: any) => {
      await app.logIn(credentials);
      setCurrentUser(app);
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
    setCurrentUser(app.currentUser);
  }, [app]);

  const appContext = React.useMemo(() => {
    return { ...app, currentUser, logIn, logOut };
  }, [app, currentUser, logIn, logOut]);

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
