import { Profile } from '@/schemas/profile'
import Image from 'next/image'
import Link from 'next/link'

export const Interest = ({ profile }: { profile: Profile }) => {
    return (
        <div className='card mb-[18px] relative w-full px-[14px] py-[18px] pb-8'>
            <div className='flex justify-between mb-6'>
                <h2 className='text-[14px] font-bold'>Interest</h2>
                <Link
                    href={'/interest'}
                    className='absolute top-2 right-[14px]'
                >
                    <Image
                        src='/icons/pencil.svg'
                        width={17}
                        height={17}
                        alt='edit'
                    />
                </Link>
            </div>
            {profile.interests?.length ? (
                <div className='flex gap-2 flex-wrap'>
                    {profile.interests.map((int, i) => (
                        <div title={int} key={i} className='badge'>
                            {int}
                        </div>
                    ))}
                </div>
            ) : (
                <p className='text-sm text-white-52'>
                    Add in your interest to find better match
                </p>
            )}
        </div>
    )
}
