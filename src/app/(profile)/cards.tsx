'use client'

import { Profile } from '@/schemas/profile'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { atom, useAtom } from 'jotai'
import { userEditProfile, userProfile } from '../actions'
import { useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { SelectPortal } from '@radix-ui/react-select'
import { DatePicker } from '@/components/ui/datePicker'
import { InputWithSuffix } from '@/components/ui/inputWithSuffix'
import { format } from 'date-fns'
import { dateToAge, dateToHoroscope, dateToZodiac } from '@/lib/date'
import { InputImage } from '@/components/ui/inputImage'

const Main = ({ profile }: { profile: Profile }) => {
    const [img, setImg] = useState('')
    const isEditing = useSearchParams().get('edit') === 'true'

    useEffect(() => {
        setImg(localStorage.getItem('profile_picture') || '')
    }, [isEditing])
    return (
        <div className='aspect-[36/19] w-full rounded-[16px] bg-secondary mb-6 overflow-hidden relative  flex flex-col justify-end'>
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

export const CardAbout = ({ profile }: { profile: Profile }) => {
    const isEdit = useSearchParams().get('edit')
    const formAction = userEditProfile.bind(
        null,
        JSON.stringify(profile.interests),
    )
    return (
        <>
            <Main profile={profile} />
            <div className='card mb-[18px] relative w-full px-[14px] py-2'>
                {isEdit ? (
                    <form action={formAction}>
                        <AboutForm profile={profile} />
                    </form>
                ) : (
                    <AboutInfo profile={profile} />
                )}
            </div>
        </>
    )
}

const AboutInfo = ({ profile }: { profile: Profile }) => {
    return (
        <>
            <div className='flex justify-between mb-6'>
                <h2 className='text-[14px] font-bold'>About</h2>

                <button
                    className='absolute top-2 right-[14px]'
                    onClick={() =>
                        window.history.pushState({}, '', '?edit=true')
                    }
                >
                    <Image
                        src='/icons/pencil.svg'
                        width={17}
                        height={17}
                        alt='edit'
                    />
                </button>
            </div>
            {!profile.birthday && !profile.height && !profile.weight ? (
                <p className='text-sm text-white-52 pr-7'>
                    Add in your your to help others know you better
                </p>
            ) : (
                <>
                    {' '}
                    <RenderField
                        label='Birthday'
                        value={
                            profile.birthday
                                ? format(profile.birthday, 'dd / MMM / yyyy') +
                                  ` (${dateToAge(profile.birthday)})`
                                : '--'
                        }
                    />
                    <RenderField
                        label='Horoscope'
                        value={dateToHoroscope(profile.birthday)}
                    />
                    <RenderField
                        label='Zodiac'
                        value={dateToZodiac(profile.birthday)}
                    />
                    <RenderField
                        label='Height'
                        value={profile.height}
                        suffix='cm'
                    />
                    <RenderField
                        label='Weight'
                        value={profile.weight}
                        suffix='kg'
                    />
                </>
            )}
        </>
    )
}

const AboutForm = ({ profile }: { profile: Profile }) => {
    const [date, setDate] = useState<Date | undefined>(profile.birthday)
    const [zodiac, horoscope] = useMemo(
        () => [dateToZodiac(date), dateToHoroscope(date)],
        [date],
    )
    return (
        <>
            <div className='flex justify-between mb-6'>
                <h2 className='text-[14px] font-bold'>About</h2>

                <button className='ybg-radial-golden text-[12px]'>
                    Save & Update
                </button>
            </div>
            <InputImage name='profile_picture' />
            <div className='flex flex-col [&>*]:grid [&>*]:grid-cols-[100px_1fr] [&>*]:gap-2 [&>*]:text-[13px]'>
                <div className='items-center mb-[11px]'>
                    <Label className='text-[13px]'>Display name:</Label>
                    <Input
                        placeholder='Enter name'
                        name='name'
                        className='h-9 text-right px-[20px]'
                        defaultValue={profile?.name}
                    />
                </div>
                <div className='items-center mb-[11px]'>
                    <Label>Gender:</Label>
                    <Select defaultValue='male'>
                        <SelectTrigger className='w-full h-9 justify-end gap-2'>
                            <SelectValue placeholder='Theme' />
                        </SelectTrigger>
                        <SelectContent position='popper'>
                            <SelectItem value='male'>Male</SelectItem>
                            <SelectItem value='female'>Female</SelectItem>
                            <SelectItem value='other'>Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='items-center mb-[11px]'>
                    <Label>Birthday:</Label>
                    <DatePicker name='birthday' {...{ date, setDate }} />
                </div>
                <div className='items-center mb-[11px]'>
                    <Label>Horoscope:</Label>
                    <Input
                        placeholder='--'
                        name='horoscope'
                        className='h-9 text-right px-[20px]'
                        readOnly
                        value={horoscope}
                    />
                </div>
                <div className='items-center mb-[11px]'>
                    <Label>Zodiac:</Label>
                    <Input
                        placeholder='--'
                        name='zodiac'
                        className='h-9 text-right px-[20px]'
                        readOnly
                        value={zodiac}
                    />
                </div>
                <div className='items-center mb-[11px]'>
                    <Label>Height:</Label>
                    <InputWithSuffix
                        placeholder='Add Height'
                        name='height'
                        className='h-9'
                        suffix='cm'
                        defaultValue={profile?.height}
                    />
                </div>
                <div className='items-center mb-[11px]'>
                    <Label>Weight:</Label>
                    <InputWithSuffix
                        placeholder='Add Weight'
                        name='weight'
                        className='h-9'
                        suffix='kg'
                        defaultValue={profile?.weight}
                    />
                </div>
            </div>
        </>
    )
}

const RenderField = ({
    label,
    value,
    suffix = '',
}: {
    label: string
    value?: string | number
    suffix?: string
}) => {
    return (
        <p className='text-[13px] text-white-33 mb-[15px]'>
            {label}:{' '}
            <span className='text-white'>
                {' '}
                {value || '--'} {value && suffix}
            </span>
        </p>
    )
}
