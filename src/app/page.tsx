import { Fetch } from '@/lib/fetch';
import { userProfile } from './actions';

export default async function Home() {
	const profile = await userProfile();

	return (
		<main className="min-h-screen py-9">
			<div className="container">
				<div className="aspect-[36/19] w-full rounded-[16px] bg-secondary mb-6"></div>
        <div className='card mb-[18px]'>

        </div>
			</div>
		</main>
	);
}
