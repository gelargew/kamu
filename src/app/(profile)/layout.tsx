import { BackButton } from '@/components/ui/button'
import { logout, userProfile } from '../actions'

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const profile = await userProfile()
    return (
        <>
            <div className='container grid grid-cols-3 items-center pt-7 pb-5 sticky top-0 z-50 backdrop-blur-sm rounded-b-md'>
                <BackButton />
                <h1 className='text-center text-sm'>@{profile.username}</h1>
                <form action={logout} >
                  <button className='text-right float-right text-sm'>Logout</button>
                </form>
            </div>
            {children}
        </>
    )
}
