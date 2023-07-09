// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { fields, provinces } from '../provincesData';

export default function GET(req: NextApiRequest, res: NextApiResponse) {
    const province: any = req.query.prov;
    let selectedFields = [...fields];

    const selectedProvince = provinces.find(p => p.name === province);

    if (province) {
        const filedIds = selectedProvince?.fields;
        selectedFields = fields.filter(f => filedIds?.includes(f.id));
    }
    res.status(200).json(selectedFields);
}
