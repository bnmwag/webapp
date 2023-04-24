import useUser from '@/hooks/useUser';
import React from 'react';
import Avatar from './Avatar';
//@ts-ignore
import FeatherIcon from 'feather-icons-react';
import Button from './Button';
import useCurrentUser from '@/hooks/useCurrentUser';

interface IUserHeroProps {
	userId: string;
}

const UserHero: React.FC<IUserHeroProps> = ({ userId }) => {
	const { data: fetchedUser } = useUser(userId);
	const { data: currentUser } = useCurrentUser();

	const followersCount = fetchedUser?.followingIds.length || 0;

	if (!fetchedUser) return null;

	return (
		<div>
			<div className='flex gap-4 items-center'>
				<Avatar userId={userId} isLarge />
				<div>
					<div>
						<h1 className='text-xl'>{fetchedUser.name}</h1>
						<p className='text-gray-500'>@{fetchedUser.username}</p>
					</div>
					<div className='mt-4'>
						<div className='flex gap-2 items-center'>
							<span className='font-bold '>{followersCount}</span>
							<span className='opacity-50'>Following</span>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-between mt-8'>
				<div>
					<div className='opacity-50'>
						<div className='flex gap-4 items-center mb-4'>
							<FeatherIcon icon='map-pin' />
							<span>New York, United States</span>
						</div>
						<div className='flex gap-4 items-center'>
							<FeatherIcon icon='activity' />
							<span>Joined 19th April 2023</span>
						</div>
					</div>
					<div className='mt-8'>
						{currentUser?.id === userId ? (
							<Button label='Edit Profile' />
						) : (
							<Button
								label={
									fetchedUser.isFollowing
										? 'Unfollow'
										: 'Follow'
								}
							/>
						)}
					</div>
				</div>
				<div className=' w-1/2'>
					<div className=''>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Harum natus cum consequatur laudantium
							laboriosam quo nemo distinctio eum adipisci! Debitis
							quidem atque dolor nostrum molestiae?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserHero;
