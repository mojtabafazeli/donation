'use client';
import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import {useApp} from '@/app/RealmApp';

export default function MenuProfile () {
    const [visible, setVisible] = React.useState(false);
    const {logOut} = useApp();
    
    return (
        <>
            <div
                className="flex items-center gap-1 text-white/90 no-underline hover:text-white"
                onClick={() => setVisible(prev => !prev)}
            >
                <MdAccountCircle />
                <p className="m-0">مهمان</p>
            </div>
            <div className={visible? "visible absolute p-2 t-4 border-2 rounded bg-white" : "hidden"}>
                <ul className="list-none m-0">
                    <li>
                        <button onClick={logOut}>
                            خروج از حساب 
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};