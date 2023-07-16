'use client';

import React from 'react';
import * as Realm from "realm-web";
import atlasConfig from "../atlasConfig.json";

const { baseUrl  } = atlasConfig;

function createApp(id: any) {
    return new Realm.App({ id, baseUrl });
}
 
const AppContext = React.createContext(null);

export function AppProvider({ appId, children }: { appId:any, children: any; }) {
    const [currentUser, setCurrentUser] = React.useState();
    const [app, setApp] = React.useState(createApp(appId));

    React.useEffect(() => {
        setApp(createApp(appId));
      app.logIn(Realm.Credentials.anonymous());
    }, [appId]);
    
    const logIn = React.useCallback(
        async (credentials: any) => {
            await app.logIn(credentials);
            setCurrentUser(app);
        }, [app]
    );

      const logOut = React.useCallback(async () => {
    try {
      const user = app.currentUser;
      await user?.logOut();
      user && await app.removeUser(user);
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
    <AppContext.Provider value={appContext}>
      {children}
    </AppContext.Provider>
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
