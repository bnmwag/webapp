import React from 'react';
import StoreItem from '../StoreItem';
import useStoreItems from '@/hooks/useStoreItems';
import { DefaultDeserializer } from 'v8';

interface IFeedProps {
	userId?: string;
}

const Feed: React.FC<IFeedProps> = ({ userId }) => {
	const { data: storeItems = [], isLoading } = useStoreItems(userId);

	if (isLoading) return <div>Loading...</div>;

	const renderStoreItem = (item: Record<string, any>) => {
		return (
			<div className='mb-4' key={item.id}>
				<StoreItem
					item={item}
					userId={item.userId}
					showOwner={userId ? false : true}
				/>
			</div>
		);
	};

	return (
		<div className='max-w-[1440px] w-full flex flex-wrap gap-4 justify-between'>
			{[0, 1, 2].map((index) => (
				<div className='flex flex-col w-full md:w-[32.5%]' key={index}>
					{storeItems
						.filter(
							(_: any, itemIndex: number) =>
								itemIndex % 3 === index
						)
						.map(renderStoreItem)}
				</div>
			))}
		</div>
	);
};

export default Feed;
