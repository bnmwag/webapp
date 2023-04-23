import useUser from '@/hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface IAvatarProps {
	userId: string;
	isLarge?: boolean;
	hasBorder?: boolean;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
	userId,
	isLarge,
	hasBorder,
}) => {
	const { data: fetchedUser } = useUser(userId);

	return (
		<div
			className={`
       			${hasBorder ? 'border-4 border-black' : ''}
       			${isLarge ? 'h-32' : 'h-12'}
       			${isLarge ? 'w-32' : 'w-12'}
       			rounded-full 
       			hover:opacity-90
       			transition
       			cursor-pointer
    		`}
		>
			<Image
				width={isLarge ? 128 : 48}
				height={isLarge ? 128 : 48}
				style={{
					objectFit: 'cover',
					borderRadius: '100%',
					width: '100%',
					height: '100%',
				}}
				alt={`${fetchedUser?.name}'s avatar image`}
				src={fetchedUser?.avatar || '/images/placeholder.gif'}
			/>
		</div>
	);
};

export default Avatar;
