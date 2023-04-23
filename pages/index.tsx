import Header from '@/components/layout/Header';
import TrendingFeed from '@/components/layout/TrendingFeed';
import SearchBar from '@/components/SearchBar';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Header>
				<div className='flex flex-col gap-12 w-1/3'>
					<div className='flex flex-col gap-4'>
						<div className='h-32 w-32'>
							<Image
								src='/district-logo.svg'
								alt='logo'
								width={100}
								height={100}
								className='h-full w-full fit'
							/>
						</div>
						<div className='font-light text-gray-600'>
							<p>Basically everything you need</p>
						</div>
					</div>
					<div>
						<SearchBar />
					</div>
				</div>
			</Header>

			<TrendingFeed />
		</motion.div>
	);
};

export default Home;
