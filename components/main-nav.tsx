'use client';

import Logo from '@/assets/breizhsport-logo.svg';
import { AlignJustify, MoveRight, ShoppingCart, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MainNav = () => {
	const [isOpenMenu, setOpenMenu] = useState(false);

	const handleToggleMenu = () => {
		setOpenMenu(!isOpenMenu);
	};

	return (
		<>
			<div className="w-full bg-primary grid grid-cols-3 items-center p-4">
				<div className="w-full flex items-center">
					{!isOpenMenu ? (
						<AlignJustify
							onClick={handleToggleMenu}
							color="white"
							className="cursor-pointer"
						/>
					) : (
						<X
							onClick={handleToggleMenu}
							color="white"
							className="cursor-pointer"
						/>
					)}
				</div>
				<div className="w-full flex items-center justify-center">
					<Link href="/">
						<Image src={Logo} alt={'breizhsport logo'} />
					</Link>
				</div>
				<div className="w-full flex items-center justify-end gap-2">
					{/* <Search /> */}
					<Link href="/cart">
						<ShoppingCart
							color="white"
							className="cursor-pointer"
						/>
					</Link>
					{/* <ModeToggle /> */}
				</div>
			</div>

			{isOpenMenu && (
				<div className="absolute flex flex-col w-full h-full bg-primary-foreground py-4 px-8 gap-8 open-menu">
					<Link href="/collections" onClick={handleToggleMenu}>
						<span className="flex gap-4 justify-between">
							Collections <MoveRight />
						</span>
					</Link>
					<span className="flex">Contact</span>

					<div className="flex fixed bottom-0 left-0 py-4 px-8 bg-secondary w-full flex-col gap-4">
						<span className="flex gap-4">
							<User />
							Connexion
						</span>
						<span className="">EUR € | France</span>
					</div>
				</div>
			)}
		</>
	);
};

export default MainNav;

