import Loader from '@/components/Loader';
import UserHero from '@/components/UserHero';
import Feed from '@/components/layout/Feed';
import Header from '@/components/layout/Header';
import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';
import React from 'react';

interface IUserProps {}

const User: React.FC<IUserProps> = (props) => {
	const router = useRouter();
	const { userId } = router.query;

	const { data: fetchedUser, isLoading } = useUser(userId as string);

	if (isLoading || !fetchedUser) return <Loader />;

	return (
		<>
			<Header>
				<UserHero userId={userId as string} />
			</Header>
			<Feed userId={userId as string} />
		</>
	);
};

export default User;
