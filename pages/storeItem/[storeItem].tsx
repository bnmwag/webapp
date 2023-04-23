import useStoreItem from '@/hooks/useStoreItem';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface IStoreItemProps {}

const StoreItem: React.FC<IStoreItemProps> = (props) => {
	const { query: item } = useRouter();
	const storeItemId = item.storeItem as string;
	const { data, error, isLoading, mutate } = useStoreItem(storeItemId);

	const [fitState, setFitState] = useState<'contain' | 'cover'>('contain');

	const handlePhotoClick = () => {
		setFitState((prev) => (prev === 'contain' ? 'cover' : 'contain'));
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50'
		>
			<div className='fixed bottom-0 left-1/2 -translate-x-1/2 h-[90vh] w-full max-w-[1340px] bg-white'>
				<div className='sticky w-full px-4 py-2 top-0 z-10 bg-white'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<div className='relative w-10 h-10'>asd</div>
						</div>
						<div className='flex items-center'>
							<div className='relative w-10 h-10'>asd</div>
						</div>
					</div>
				</div>
				<div onClick={handlePhotoClick} className='h-full bg-red'>
					<Image
						src={data?.url}
						width={1080}
						height={1080}
						alt='store item'
						style={{ objectFit: fitState }}
						className='w-full h-full'
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default StoreItem;
