import useUser from '@/hooks/useUser';
import React from 'react';
import Avatar from './Avatar';

interface IUserHeroProps {
	userId: string;
}

const UserHero: React.FC<IUserHeroProps> = ({ userId }) => {
	const { data: fetchedUser } = useUser(userId);
	if (!fetchedUser) return null;

	return (
		<div>
			<div className='flex gap-4'>
				<Avatar userId={userId} />
				<h1>{fetchedUser.username}</h1>
			</div>
		</div>
	);
};

export default UserHero;
