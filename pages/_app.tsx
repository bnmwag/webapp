import { NavBar } from '@/components';
import Layout from '@/components/Layout';
import EditModal from '@/components/modals/EditModal';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import '@/styles/globals.css';
import { ReactLenis } from '@studio-freight/react-lenis';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
	const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);

	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	useEffect(() => {
		if (loginModal.isOpen || registerModal.isOpen) {
			setScrollEnabled(false);
		} else {
			setScrollEnabled(true);
		}
	}, [loginModal, registerModal]);

	return (
		<SessionProvider session={pageProps.session}>
			<NavBar />
			<Toaster />

			<LoginModal />
			<RegisterModal />
			<EditModal />

			<ReactLenis root>
				<AnimatePresence mode='wait'>
					<main
						className='mt-[75px] flex flex-col items-center
					 overflow-x-hidden
						'
						style={{
							height: scrollEnabled ? 'max-content' : '50vh',
							overflowY: scrollEnabled ? 'scroll' : 'hidden',
						}}
					>
						<Component {...pageProps} />
					</main>
				</AnimatePresence>
			</ReactLenis>
		</SessionProvider>
	);
}
