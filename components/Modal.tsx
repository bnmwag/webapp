import React, { useCallback } from 'react';
//@ts-ignore
import FeatherIcon from 'feather-icons-react';
import Button from './Button';
import Image from 'next/image';

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
		<div className='fixed top-0 left-0 bottom-0 right-0 bg-white z-50 flex'>
			<div className='absolute top-8 left-10'>
				<Image
					src='./district-logo.svg'
					width={25}
					height={20}
					alt='district logo'
				/>
			</div>
			<div className='w-1/3 h-screen flex flex-col pt-64'>
				<div className='flex items-center justify-between p-10'>
					<h3 className='text-3xl font-semibold'>{title}</h3>
					<button
						onClick={handleClose}
						className=' p-1 ml-auto border-0 hover:opacity-70 transition'
					>
						<FeatherIcon icon='x' />
					</button>
				</div>
				<div className='relative p-10 '>{body}</div>
				<div className='flex flex-col gap-2 p-10 text-black items-start'>
					<Button
						disabled={disabled}
						label={actionLabel}
						// secondary
						large
						onClick={handleSubmit}
					/>
					{footer}
				</div>
			</div>
			<div className='w-2/3 overflow-hidden rounded-tl-3xl rounded-bl-3xl'>
				<Image
					src='https://media.discordapp.net/attachments/1078265198042943578/1100004082518863932/bango_geometric_bending_riffeled_3d_shape_black_white_high_reso_9e67d58b-d1c5-44ed-8cdc-92e41f180beb.png?width=1670&height=1670'
					alt='background'
					width={1670}
					height={1670}
					className='h-full w-full object-cover'
				/>
			</div>
		</div>
	);
};

export default Modal;
