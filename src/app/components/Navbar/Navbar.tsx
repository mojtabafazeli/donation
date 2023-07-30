"use client";

import Link from "next/link";
import { FaHome, FaCity } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import {useApp} from "@/app/RealmApp";

export default function Navbar() {
  const {isAuthenticated} = useApp();
  const accountLink = isAuthenticated ? (
      <Link
      href="/account"
      className="flex items-center gap-1 text-white/90 no-underline hover:text-white"
      >
      <MdAccountCircle />
          مهمان
    </Link>
  )  : (
    <Link
        href="/auth"
        className="flex items-center gap-1 text-white/90 no-underline hover:text-white"
        >
          <MdAccountCircle />
          حساب کاربری
    </Link>
  )

  return (
    <nav className="bg-slate-600 p-4 sticky drop-shadow-xl z-10">
      <div className="prose prose-xl justify-between mx-auto flex gap-6">
        <div className="prose prose-xl flex gap-6">
          <Link
            href="/home"
            className="flex items-center gap-1 text-white/90 no-underline hover:text-white"
          >
            <FaHome />
            خانه
          </Link>
          <Link
            href="/province"
            className="flex items-center gap-1 text-white/90 no-underline hover:text-white"
          >
            <FaCity />
            استان ها
          </Link>
        </div>
        <div>{accountLink}</div>
      </div>
    </nav>
  );
}
