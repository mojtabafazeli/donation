import Link from 'next/link';
import { FaHome, FaCity } from 'react-icons/fa';

export default function Navbar() {
  return (
      <nav className="bg-slate-600 p-4 sticky drop-shadow-xl z-10">
          <div className="prose prose-xl mx-auto flex gap-6">
          <Link href="/home" className="flex items-center gap-1 text-white/90 no-underline hover:text-white"><FaHome />خانه</Link>
          <Link href="/province" className="flex items-center gap-1 text-white/90 no-underline hover:text-white"><FaCity />استان ها</Link>
      </div>
    </nav>
  )
}
