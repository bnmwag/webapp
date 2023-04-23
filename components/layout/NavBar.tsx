import Image from 'next/image';
import SearchBar from '../SearchBar';
import useCurrentUser from '@/hooks/useCurrentUser';
import Button from '../Button';
import useLoginModal from '@/hooks/useLoginModal';
import Avatar from '../Avatar';

interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = (props) => {
	const { data: currentUser } = useCurrentUser();
	const loginModal = useLoginModal();

	const handleLoginClick = () => {
		loginModal.onOpen();
	};

	return (
		<div className='fixed top-0 left-0 w-screen h-[75px] shadow-md bg-white z-50'>
			<div className='flex items-center justify-between h-full px-36'>
				<div className='flex items-center gap-36 h-full'>
					<div className='flex items-center'>
						<div className='w-10 h-10 mr-2'>
							<Image
								src='/district-logo.svg'
								alt='logo'
								width={25}
								height={20}
								className='h-full w-full fit'
							/>
						</div>
						<div className='text-xl font-medium'>District</div>
					</div>

					<SearchBar />
				</div>
				<div className='flex items-center gap-36 h-full'>
					{currentUser ? (
						<div
							className='flex items-center gap-4'
							onClick={handleLoginClick}
						>
							<div className='flex flex-col items-end'>
								<div className='text-sm font-bold'>
									{currentUser?.name}
								</div>
								{/* <div className='text-xs font-light'>Admin</div> */}
							</div>
							<Avatar userId={currentUser?._id} />
						</div>
					) : (
						<Button
							label='Login'
							secondary
							onClick={handleLoginClick}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
