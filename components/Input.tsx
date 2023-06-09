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
			className='w-full py-4 text-lg outline-none border-b-2 text-black transition focus:border-black disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed'
		/>
	);
};

export default Input;
