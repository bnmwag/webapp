// import serverAuth from '@/libs/serverAuth'
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST' && req.method !== 'GET') {
		return res.status(405).end();
	}

	try {
		if (req.method === 'GET') {
			const { userId } = req.query;

			let posts;

			if (userId && typeof userId === 'string') {
				posts = await prisma.storeItem.findMany({
					where: {
						userId,
					},
					include: {
						user: true,
					},
					orderBy: {
						createdAt: 'desc',
					},
				});
			} else {
				posts = await prisma.storeItem.findMany({
					include: {
						user: true,
					},
					orderBy: {
						createdAt: 'desc',
					},
				});
			}

			return res.status(200).json(posts);
		}
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
}
