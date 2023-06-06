import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import { Metadata } from 'next';
import getAllProvinces from 'lib/getAllProvinces';

export const metadata: Metadata = {
  title: 'دیار'
}

export default async function Home() {
  const allProvinces: Province[] = await getAllProvinces();

  const provsList = allProvinces?.map(prov => (
    <li key={prov?.id}>
      <Link href={`/province/${prov.name}`}>{prov.name}</Link>
      </li>
  ))
  return (
    <main className="container mx-auto">
      <ul>
      <label className="text-3xl font-bold underline">فهرست استان ها</label>
      {provsList}
      </ul>
    </main>
  )
}
