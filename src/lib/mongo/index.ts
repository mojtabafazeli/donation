import * as Realm from 'realm-web';

let appId: string;

if(process.env.NEXT_PUBLIC_MONGO_APP_ID) {
    appId = process.env.NEXT_PUBLIC_MONGO_APP_ID;
} else {
    throw new Error("appId environment variable is not set");
}

export const realmApp: Realm.App = new Realm.App({
   id: appId,
})

export const mongodb = realmApp?.currentUser?.mongoClient("mongodb-atlas");

export const user = realmApp.currentUser;