'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [allProvs, setAllProvs] = useState([]);
  // console.log('all provs', allProv);
  useEffect(() => {
    fetch('https://iran-locations-api.vercel.app/api/v1/states')
    .then(res => res.json())
    .then(res => setAllProvs(res));
  }, [])

  const provs = allProvs?.map(prov => (
    <li key={prov.id}>
      <a href={prov.name}>{prov.name}</a>
      </li>
  ))
  return (
    <main>
      <ul>
      <label>فهرست استان ها</label>
      {provs}
      </ul>
    </main>
  )
}
