// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    id: string;
    name: string;
};

export default function GET(req: NextApiRequest, res: NextApiResponse) {
    const list = [
        {
            id: '0',
            name: 'هر کار'
        },
        {
            id: '1',
            name: 'درمان'
        },
        {
            id: '2',
            name: 'آموزش'
        },
        {
            id: '3',
            name: 'سرپرستی'
        },
    ]
    res.status(200).json(list);
}
