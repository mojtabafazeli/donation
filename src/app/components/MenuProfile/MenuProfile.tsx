'use client';
import { MdAccountCircle } from "react-icons/md";

export default function MenuProfile = () => {
    return (
        <div
       className="flex items-center gap-1 text-white/90 no-underline hover:text-white"
    >
        <MdAccountCircle />
          <p>مهمان</p>
    </div>
    )
}