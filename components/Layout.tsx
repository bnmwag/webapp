import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
	const router = useRouter();

	return (
		<motion.div
			key={router.route}
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 1 }}
		>
			<main className='mt-[75px] flex flex-col items-center'>
				{children}
			</main>
		</motion.div>
	);
};

export default Layout;
