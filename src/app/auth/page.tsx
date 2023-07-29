"use client";

import FormLogin from '../components/FormLogin/FormLogin';
import { useApp } from '../RealmApp';
import { useRouter } from 'next/navigation';

export default function Auth() {
    const { push } = useRouter();
    const {currentUser}  = useApp();
    console.log(useApp());
    // if(currentUser) push('./home');

    return(
        <FormLogin />
    )
}