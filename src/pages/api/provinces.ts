// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { provinces, activeProvinces } from '../provincesData';

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Province>
) {
  const filteredList = provinces.filter(p => activeProvinces.includes(p.name) && p.active);
  res.status(200).json(filteredList);
}
