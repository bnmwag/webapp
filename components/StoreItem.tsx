import useUser from '@/hooks/useUser';
import React from 'react';
import Avatar from './Avatar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IStoreItemProps {
	item: Record<string, any>;
	userId: string;
	showOwner?: boolean;
}

const StoreItem: React.FC<IStoreItemProps> = ({ item, userId, showOwner }) => {
	const { data: user } = useUser(userId);

	return (
		<Link
			href={`/storeItem/${item.id}`}
			className='overflow-hidden rounded-lg w-full relative group cursor-pointer block'
		>
			<Link
				href={`/users/${userId}`}
				className='absolute right-0 top-0 py-2 px-2 w-1/2 bg-white flex items-center gap-8 justify-end rounded-bl-lg z-10 border-2 border-white'
				style={
					showOwner
						? {
								display: 'flex',
						  }
						: {
								display: 'none',
						  }
				}
			>
				{user?.username}
				<Avatar userId={userId} />
			</Link>

			<Image
				src={item.url}
				alt={user?.username + 's image'}
				width={500}
				height={500}
				className='h-full w-full fit group-hover:scale-105 transition-transform duration-300'
			/>
		</Link>
	);
};

export default StoreItem;
