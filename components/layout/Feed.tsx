import React from 'react';
import StoreItem from '../StoreItem';
import useStoreItems from '@/hooks/useStoreItems';

interface IFeedProps {
	userId?: string;
}

const Feed: React.FC<IFeedProps> = ({ userId }) => {
	const { data: storeItems = [], isLoading } = useStoreItems(userId);

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className='max-w-[1440px] w-full flex flex-wrap gap-4 justify-between'>
			asd
			<div className='flex flex-col w-full md:w-[32.5%]'>
				{storeItems
					.filter((_: any, index: number) => index % 3 === 0)
					.map((item: Record<string, any>) => (
						<div className='mb-4' key={item.id}>
							<StoreItem
								item={item}
								userId={item.userId}
								showOwner={userId ? false : true}
							/>
						</div>
					))}
			</div>
			<div className='flex flex-col w-full md:w-[32.5%]'>
				{storeItems
					.filter((_: any, index: number) => index % 3 === 1)
					.map((item: Record<string, any>) => (
						<div className='mb-4' key={item.id}>
							<StoreItem
								item={item}
								userId={item.userId}
								showOwner={userId ? false : true}
							/>
						</div>
					))}
			</div>
			<div className='flex flex-col w-full md:w-[32.5%]'>
				{storeItems
					.filter((_: any, index: number) => index % 3 === 2)
					.map((item: Record<string, any>) => (
						<div className='mb-4' key={item.id}>
							<StoreItem
								item={item}
								userId={item.userId}
								showOwner={userId ? false : true}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default Feed;
