import React, { useCallback } from 'react';
//@ts-ignore
import FeatherIcon from 'feather-icons-react';
import Button from './Button';

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
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-900 bg-opacity-70'>
				<div className='relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto'>
					<div className='h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className='flex items-center justify-between p-10'>
							<h3 className='text-3xl font-semibold'>{title}</h3>
							<button
								onClick={handleClose}
								className=' p-1 ml-auto border-0 hover:opacity-70 transition'
							>
								<FeatherIcon icon='x' />
							</button>
						</div>

						<div className='relative p-10 flex-auto'>{body}</div>

						<div className='flex flex-col gap-2 p-10 text-black'>
							<Button
								disabled={disabled}
								label={actionLabel}
								secondary
								fullWidth
								large
								onClick={handleSubmit}
							/>
							{footer}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
