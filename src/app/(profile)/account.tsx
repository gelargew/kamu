'use client'

import { dateToAge, dateToHoroscope, dateToZodiac } from '@/lib/date'
import { Profile } from '@/schemas/profile'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Account = ({ profile }: { profile: Profile }) => {
    const [img, setImg] = useState('')
    const isEditing = useSearchParams().get('edit') === 'true'

    useEffect(() => {
        setImg(localStorage.getItem('profile_picture') || '')
    }, [isEditing])
    return (
        <div className='aspect-[36/19] w-full rounded-[16px] bg-secondary mb-6 overflow-hidden relative  flex flex-col justify-end'>
            {img && (
                <>
                    <Image
                        src={img}
                        width={360}
                        height={240}
                        alt={profile.name || ''}
                        className='absolute inset-0 z-0'
                    />

                    <div
                        className='absolute inset-0 z-10'
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.00) 45.83%, #000 100%)',
                        }}
                    />
                </>
            )}

            <div className='z-20 relative p-4'>
                <div className='font-bold text-base mb-[6px]'>
                    @{profile.username},{' '}
                    {profile.birthday ? dateToAge(profile.birthday) : ''}
                </div>
                {/* <p className='capitalize text-[13px] mb-3'>{profile.gender}</p> */}
                {profile.birthday && (
                    <div className='flex gap-4'>
                        <div className='badge bg-secondary flex gap-2'>
                            {' '}
                            <Image
                                src='/icons/horoscope.svg'
                                width='20'
                                height='20'
                                alt='horoscope'
                            />{' '}
                            {dateToZodiac(profile.birthday)}
                        </div>
                        <div className='badge bg-secondary flex gap-2'>
                            <Image
                                src='/icons/zodiac.svg'
                                width='20'
                                height='20'
                                alt='zodiac'
                            />
                            {dateToHoroscope(profile.birthday)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
