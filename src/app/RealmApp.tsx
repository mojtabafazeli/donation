'use client';

import React from 'react';
import * as Realm from 'realm-web';

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
      // const credentials = Realm.Credentials.anonymous();
      // app.logIn(credentials);
    }
    setCurrentUser(app?.currentUser);
  }, [app]);

  const register= React.useCallback(
    async (values: any) => {
       const {email, password} = values
       const credEmail = email?.toLowerCase();
       try {
        await app.emailPasswordAuth.registerUser(
            {
              email: credEmail,
              password
            }
          );
          const credentials = Realm.Credentials.emailPassword(credEmail, password);
          await app.logIn(credentials);
          setCurrentUser(app.currentUser)
       } catch (e) {
        console.log(e)
       }
    },
    [(app)]
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
    setCurrentUser(null);
  }, [app]);

  const sendPasswordResetEmail = React.useCallback(async ( email: string ) => {
    try {
      await app.emailPasswordAuth.sendResetPasswordEmail({ email });
      return Promise.resolve();
    } catch (err) {
      console.log(err);
    }
  }, [app])

  const appContext = React.useMemo(() => {
    return { ...app, currentUser, logIn, logOut, register, sendPasswordResetEmail };
  }, [app, currentUser, logIn, logOut, register, sendPasswordResetEmail]);

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
