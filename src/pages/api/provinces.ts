import type { NextApiRequest, NextApiResponse } from 'next';
import { provinces, activeProvinces } from '../../lib/provincesData';

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filteredList = provinces.filter(p => activeProvinces.includes(p.name) && p.active);
  res.status(200).json(filteredList);
}
