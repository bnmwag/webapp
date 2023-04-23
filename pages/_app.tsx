import { NavBar } from '@/components';
import Layout from '@/components/Layout';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import '@/styles/globals.css';
import { ReactLenis } from '@studio-freight/react-lenis';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		const handleRouteChangeStart = () => {
			setShouldRender(false);
		};

		const handleRouteChangeComplete = () => {
			setShouldRender(true);
		};

		router.events.on('routeChangeStart', handleRouteChangeStart);
		router.events.on('routeChangeComplete', handleRouteChangeComplete);

		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart);
			router.events.off('routeChangeComplete', handleRouteChangeComplete);
		};
	}, [router]);

	return (
		<SessionProvider session={pageProps.session}>
			<NavBar />
			<Toaster />

			<LoginModal />
			<RegisterModal />

			<ReactLenis root>
				<AnimatePresence mode='wait'>
					{shouldRender && (
						<main className='mt-[75px] flex flex-col items-center'>
							<Component {...pageProps} />
						</main>
					)}
				</AnimatePresence>
			</ReactLenis>
		</SessionProvider>
	);
}
