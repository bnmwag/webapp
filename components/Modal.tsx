import React, { useCallback } from 'react';
//@ts-ignore
import FeatherIcon from 'feather-icons-react';
import Button from './Button';
import Image from 'next/image';
import useStoreItems from '@/hooks/useStoreItems';

export interface IModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	onSubmit?: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
}

const Modal: React.FunctionComponent<IModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
}) => {
	const handleClose = useCallback(() => {
		if (disabled) return;

		onClose?.();
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) return;

		onSubmit?.();
	}, [disabled, onSubmit]);

	if (!isOpen) return null;

	return (
		<div className='fixed top-0 left-0 bottom-0 right-0 z-50 flex bg-white'>
			<div className='sm:w-2/3 hidden sm:block h-screen bg-neutral-100'>
				<Image
					src='./auth_bg.jpg'
					alt='background'
					width={1670}
					height={1670}
					className='h-full w-full object-cover'
				/>
			</div>

			<div className='md:w-1/3 md:min-w-[500px] w-full h-screen flex flex-col justify-center bg-white bg-opacity-50 relative'>
				<div className='absolute top-0 left-0 flex items-center justify-between p-20 w-full'>
					<Image
						src='./district-logo.svg'
						width={25}
						height={20}
						alt='district logo'
					/>

					<button
						onClick={handleClose}
						className=' p-1 ml-auto border-0 hover:opacity-70 transition'
					>
						<FeatherIcon icon='x' />
					</button>
				</div>
				<div className='p-20'>
					<h3 className='text-3xl font-semibold'>{title}</h3>
				</div>
				<div className='relative p-20 '>{body}</div>
				<div className='flex flex-col gap-2 p-20 text-black items-center '>
					<Button
						disabled={disabled}
						label={actionLabel}
						fullWidth
						large
						secondary
						onClick={handleSubmit}
					/>
					{footer}
				</div>
			</div>
		</div>
	);
};

export default Modal;
