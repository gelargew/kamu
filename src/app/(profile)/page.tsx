import { userProfile } from '../actions'
import Image from 'next/image'
import { CardAbout } from './cards'
import Link from 'next/link'
import { Interest } from './interest'

export default async function Home() {
    const profile = await userProfile()

    return (
        <main className='min-h-screen pb-9'>
            <div className='container'>
                <CardAbout profile={profile} />
                {/* INTEREST */}
                <Interest profile={profile} />
            </div>
        </main>
    )
}
