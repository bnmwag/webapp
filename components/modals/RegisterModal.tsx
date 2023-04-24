import React, { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import axios from 'axios';

import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';

import Input from '../Input';
import Modal from '../Modal';

const RegisterModal: React.FC = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) return;

		registerModal.onClose();
		loginModal.onOpen();
	}, [isLoading, loginModal, registerModal]);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			await axios.post('/api/register', {
				email,
				password,
				username,
				name,
			});

			setIsLoading(false);

			toast.success('Register success');

			signIn('credentials', {
				email,
				password,
			});

			registerModal.onClose();
		} catch (error) {
			console.log(error);
			toast.error('Register failed');
		} finally {
			setIsLoading(false);
		}
	}, [registerModal, email, password, username, name]);

	const bodyConent = (
		<div className='flex flex-col gap-4'>
			<Input
				placeholder='Email'
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				disabled={isLoading}
			/>
			<Input
				placeholder='Name'
				onChange={(e) => setName(e.target.value)}
				value={name}
				disabled={isLoading}
			/>
			<Input
				placeholder='Username'
				onChange={(e) => setUsername(e.target.value)}
				value={username}
				disabled={isLoading}
			/>
			<Input
				placeholder='Password'
				type='password'
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				disabled={isLoading}
			/>
		</div>
	);

	const footerContent = (
		<div className='text-neutral-400 text-center mt-4'>
			<p>
				Already have an account?{' '}
				<span
					className='text-black cursor-pointer hover:underline'
					onClick={onToggle}
				>
					Sign in
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title='Create an account'
			actionLabel='Register'
			onClose={registerModal.onClose}
			onSubmit={onSubmit}
			body={bodyConent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
