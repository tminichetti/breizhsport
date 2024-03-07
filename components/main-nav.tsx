'use client';
import React from 'react';
import Logo from '@/assets/breizhsport-logo.svg';
import { uniqueProductsCountSelector } from '@/lib/redux/selectors/cartSelector';
import { AlignJustify, MoveRight, ShoppingCart, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MainNav = () => {
	const dispatch = useDispatch();
	const [isOpenMenu, setOpenMenu] = useState(false);
	const numberOfProducts: number = useSelector(uniqueProductsCountSelector);

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
						<Image
							src={Logo}
							alt={'breizhsport logo'}
							className="md:w-[220px]"
						/>
					</Link>
				</div>
				<div className="w-full flex items-center justify-end gap-2">
					{/* <Search /> */}
					<Link href="/cart" className="relative">
						<ShoppingCart
							color="white"
							className="cursor-pointer"
						/>
						{numberOfProducts > 0 && (
							<span className="absolute flex justify-center items-center rounded-full bg-white w-5 h-5 left-2.5 top-5 text-xs">
								{numberOfProducts}
							</span>
						)}
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

