import { userProfile } from '../actions'
import { Interest } from './interest'
import { Account } from './account'
import { About } from './about'

export default async function Home() {
    const profile = await userProfile()

    return (
        <main className='min-h-screen pb-9'>
            <div className='container'>
                <Account profile={profile} />
                <About profile={profile} />
                {/* INTEREST */}
                <Interest profile={profile} />
            </div>
        </main>
    )
}
