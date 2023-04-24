import Image from 'next/image';
import SearchBar from '../SearchBar';
import useCurrentUser from '@/hooks/useCurrentUser';
import Button from '../Button';
import useLoginModal from '@/hooks/useLoginModal';
import Avatar from '../Avatar';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = (props) => {
	const router = useRouter();
	const { data: currentUser } = useCurrentUser();
	const loginModal = useLoginModal();

	return (
		<div className='fixed top-0 left-0 w-screen h-[75px] shadow-md bg-white z-40'>
			<div className='flex items-center justify-between h-full px-36'>
				<div className='flex items-center gap-36 h-full'>
					<Link className='flex items-center cursor-pointer' href='/'>
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
					</Link>

					<SearchBar />
				</div>
				<div className='flex items-center gap-36 h-full'>
					{currentUser ? (
						<Link
							className='flex items-center gap-4'
							href={`/users/${currentUser?.id}`}
						>
							<div className='flex flex-col items-end'>
								<div className='text-sm font-bold'>
									{currentUser?.name}
								</div>
								{/* <div className='text-xs font-light'>Admin</div> */}
							</div>
							<Avatar userId={currentUser?.id} />
						</Link>
					) : (
						<Button
							label='Login'
							secondary
							onClick={() => loginModal.onOpen()}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
