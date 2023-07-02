import type { NextApiRequest, NextApiResponse } from 'next';

export default function POST(req: NextApiRequest, res: NextApiResponse) {
    const { province, category } = req.body;
    
    res.status(200).json({
        province, category
    });
}