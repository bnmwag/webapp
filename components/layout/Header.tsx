import React from 'react';

interface IHeaderProps {
	children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
	return (
		<div className='w-full max-w-[1440px] py-64 flex items-center'>
			{children}
		</div>
	);
};

export default Header;
