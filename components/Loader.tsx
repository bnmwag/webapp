import React from 'react';
import { ClipLoader } from 'react-spinners';

interface ILoaderProps {}

const Loader: React.FC<ILoaderProps> = (props) => {
	return (
		<div className='flex fap-4 fixed h-full w-full bg-black bg-opacity-50 items-center justify-center'>
			<ClipLoader color='black' size={80} />
			<h1>Loading...</h1>
		</div>
	);
};

export default Loader;
