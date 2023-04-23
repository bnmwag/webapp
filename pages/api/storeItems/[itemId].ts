// import serverAuth from "@/libs/serverAuth"
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') {
		return res.status(405).end();
	}

	try {
		const { itemId } = req.query;

		if (!itemId || typeof itemId !== 'string') {
			throw new Error('Invalid store item id');
		}

		const storeItem = await prisma.storeItem.findUnique({
			where: {
				id: itemId,
			},
		});

		return res.status(200).json(storeItem);
	} catch (error) {
		console.log(error);
		return res.status(500).end();
	}
}
