'use client'

import { Profile } from '@/schemas/profile'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
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
import { DatePicker } from '@/components/ui/datePicker'
import { InputWithSuffix } from '@/components/ui/inputWithSuffix'
import { format } from 'date-fns'
import { dateToAge, dateToHoroscope, dateToZodiac } from '@/lib/date'
import { InputImage } from '@/components/ui/inputImage'

export const About = ({ profile }: { profile: Profile }) => {
    const isEdit = useSearchParams().get('edit')
    const formAction = userEditProfile.bind(
        null,
        JSON.stringify(profile.interests),
    )
    return (
        <>
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
    const [date, setDate] = useState<Date | undefined>(profile.birthday || undefined)
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
                        defaultValue={profile?.height || ''}
                    />
                </div>
                <div className='items-center mb-[11px]'>
                    <Label>Weight:</Label>
                    <InputWithSuffix
                        placeholder='Add Weight'
                        name='weight'
                        className='h-9'
                        suffix='kg'
                        defaultValue={profile?.weight || ''}
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
    value?: string | number | null
    suffix?: string
}) => {
    return (
        <p className='text-[13px] text-white-33 mb-[15px] flex gap-2'>
            {label}:{' '}
            <span className='text-white'>
                {' '}
                {value || '--'} {value &&  suffix}
            </span>
        </p>
    )
}
