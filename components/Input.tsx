import React from 'react';
export interface IInputProps {
	placeholder?: string;
	value?: string;
	type?: string;
	disabled?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<IInputProps> = ({
	placeholder,
	value,
	type,
	disabled,
	onChange,
}) => {
	return (
		<input
			disabled={disabled} //
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			type={type}
			className='w-full p-4 text-lg border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition bg-transparent disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed'
		/>
	);
};

export default Input;
