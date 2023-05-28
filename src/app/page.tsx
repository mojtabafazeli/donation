import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link';
import { Metadata } from 'next';
import getAllProvinces from 'lib/getAllProvinces';

export const metadata: Metadata = {
  title: 'دیار'
}

export default async function Home() {
  const allProvinces: Province[] = await getAllProvinces();
  console.log(allProvinces);

  const provsList = allProvinces?.map(prov => (
    <li key={prov?.id}>
      <Link href={`/about/${prov.name}`}>{prov.name}</Link>
      </li>
  ))
  return (
    <main className={styles.main}>
      <ul>
      <label>فهرست استان ها</label>
      {provsList}
      </ul>
    </main>
  )
}
