import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '@/libs/prismadb';

const serverAuth = async (req: NextApiRequest) => {
	const session = await getSession({ req });

	if (!session?.user?.email) {
		return;
		// throw new Error('You must be signed in to access this page')
	}

	const currentUser = await prisma.user.findUnique({
		where: { email: session.user.email },
	});

	if (!currentUser) {
		throw new Error('Not signed in');
	}

	return { currentUser };
};

export default serverAuth;