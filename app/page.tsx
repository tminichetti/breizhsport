import React from 'react';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import BasketballImage from '@/assets/collections/basketball.webp';
import FootballImage from '@/assets/collections/football.webp';
import SurfImage from '@/assets/collections/surf.webp';
import TennisImage from '@/assets/collections/tennis.webp';

export default function Home() {
	return (
		<section
			id="collections"
			className="flex flex-col justify-between w-full py-4 gap-4">
			<h1 className="text-2xl">Collections</h1>
			<div className="flex flex-col gap-8">
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
		</section>
	);
}

