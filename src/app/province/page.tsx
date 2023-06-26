import Link from 'next/link';
import { Metadata } from 'next';
import getAllProvinces from 'lib/getAllProvinces';

export const metadata: Metadata = {
  title: 'دیار'
}

export default async function Province() {
  const allProvinces: Province[] = await getAllProvinces();

  const provsList = allProvinces?.map(prov => (
    <li key={prov?.id}>
      <Link href={`/province/${prov.name}`}>{prov.name}</Link>
      </li>
  ))
  return (
    <main className="container prose prose-xl mx-auto">
      <ul>
      <label className="text-3xl font-bold underline">فهرست استان ها</label>
      {provsList}
      </ul>
    </main>
  )
}
