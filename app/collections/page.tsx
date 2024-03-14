import React from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import BasketballImage from '@/assets/collections/basketball.webp';
import FootballImage from '@/assets/collections/football.webp';
import SurfImage from '@/assets/collections/surf.webp';
import TennisImage from '@/assets/collections/tennis.webp';

export default function CollectionPage() {
	return (
		<div className="flex flex-col justify-between w-full py-4 gap-4">
			<h1 className="text-2xl">Collections</h1>
			<div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-4 items-center">
				<Link href="/collections/basketball">
					<div className="flex flex-col gap-2">
						<Image
							src={BasketballImage}
							alt={'basketball collection'}
						/>
						<span className="flex gap-2">
							Basketball
							<MoveRight />
						</span>
					</div>
				</Link>
				<Link href="/collections/football">
					<div className="flex flex-col gap-2">
						<Image
							src={FootballImage}
							alt={'football collection'}
						/>
						<span className="flex gap-2">
							Football
							<MoveRight />
						</span>
					</div>
				</Link>
				<Link href="/collections/surf">
					<div className="flex flex-col gap-2">
						<Image src={SurfImage} alt={'surf collection'} />
						<span className="flex gap-2">
							Surf
							<MoveRight />
						</span>
					</div>
				</Link>
				<Link href="/collections/tennis">
					<div className="flex flex-col gap-2">
						<Image src={TennisImage} alt={'tennis collection'} />
						<span className="flex gap-2">
							Tennis
							<MoveRight />
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

