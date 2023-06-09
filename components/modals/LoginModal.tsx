import React, { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';

import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';

import Input from '../Input';
import Modal from '../Modal';

const LoginModal: React.FC = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) return;

		loginModal.onClose();
		registerModal.onOpen();
	}, [isLoading, loginModal, registerModal]);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			await signIn('credentials', {
				email,
				password,
			});

			loginModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [loginModal, email, password]);

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Input
				placeholder='Email'
				onChange={(e) => setEmail(e.target.value)}
				type='email'
				value={email}
			/>
			<Input
				placeholder='Password'
				onChange={(e) => setPassword(e.target.value)}
				type='password'
				value={password}
			/>
		</div>
	);

	const footerContent = (
		<div className='text-neutral-400 text-center mt-4'>
			<p>
				First time using District?{' '}
				<span
					className=' text-black cursor-pointer hover:underline'
					onClick={onToggle}
				>
					Create an account
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title='Welcome back!'
			actionLabel='Sign in'
			onClose={loginModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
