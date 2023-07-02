// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const provincesResponse = await fetch('https://iran-locations-api.vercel.app/api/v1/states');
  const provinces = await provincesResponse?.json();

  res.status(200).json(provinces);
}
