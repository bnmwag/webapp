import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

import useCurrentUser from '@/hooks/useCurrentUser';
import useEditModal from '@/hooks/useEditModal';
import useUser from '@/hooks/useUser';

import Input from '../Input';
import Modal from '../Modal';
import ImageUpload from '../ImageUpload';

const EditModal: React.FC = () => {
	const { data: currentUser } = useCurrentUser();
	const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
	const editModal = useEditModal();

	const [avatar, setAvatar] = useState('');
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [bio, setBio] = useState('');

	useEffect(() => {
		setAvatar(currentUser?.avatar);
		setName(currentUser?.name);
		setUsername(currentUser?.username);
		setBio(currentUser?.bio);
	}, [
		currentUser?.name,
		currentUser?.username,
		currentUser?.bio,
		currentUser?.avatar,
	]);

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			await axios.patch('/api/edit', {
				name: name || null,
				username: username || null,
				bio: bio || null,
				avatar: avatar || null,
			});
			mutateFetchedUser();

			toast.success('Updated');

			editModal.onClose();
		} catch (error) {
			console.log(error);

			toast.error('Something went wrong');
		} finally {
			setIsLoading(false);
		}
	}, [
		editModal, //
		name,
		username,
		bio,
		mutateFetchedUser,
		avatar,
	]);

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<ImageUpload
				value={avatar}
				disabled={isLoading}
				onChange={(image) => setAvatar(image)}
				label='Upload Avatar'
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
				placeholder='Bio'
				onChange={(e) => setBio(e.target.value)}
				value={bio}
				disabled={isLoading}
			/>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={editModal.isOpen}
			title='Edit your profile'
			actionLabel='Save'
			onClose={editModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
		/>
	);
};

export default EditModal;
