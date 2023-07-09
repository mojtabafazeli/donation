// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { provinces, activeProvinces } from '../provincesData';

type Data = {
  name: string;
  id: number,
  active: boolean,
};

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const provincesResponse = await fetch('https://iran-locations-api.vercel.app/api/v1/states');
  // const response = await provincesResponse?.json();

  const filteredList = provinces.filter(p => activeProvinces.includes(p.name) && p.active);
  res.status(200).json(filteredList);
}
