import { useEffect, useState } from 'react';
import useStore from '@/hooks/useStore';

interface ISearchBarProps {
	placeholder?: string;
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
	const setSearchTerm = useStore((state: any) => state.setSearchTerm);

	const [searchValue, setSearchValue] = useState<string>('');

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		setSearchTerm(e.target.value);
	};

	return (
		<input //
			type='text'
			placeholder='Search'
			value={searchValue}
			onChange={(e) => handleOnChange(e)}
			className='w-full py-3 px-8 rounded-md bg-slate-100 focus:outline-none'
		/>
	);
};

export default SearchBar;
