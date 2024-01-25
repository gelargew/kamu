'use client'

import Image from 'next/image'
import { Label } from './label'
import { useEffect, useState } from 'react'

export const InputImage = ({ name }: { name: string }) => {
    const [url, setUrl] = useState<string | null>(null)

    const getFileUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            // get base64
            const reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = () => {
                setUrl(reader.result as string)
                localStorage.setItem(name, reader.result as string)
            }
        }

    }

    useEffect(() => {
        setUrl(localStorage.getItem(name))
    }, [name])

    return (
        <Label
            htmlFor={name}
            className='flex gap-6 items-center mb-7 cursor-pointer'
        >
            <div className='w-[57px] h-[57px] flex items-center justify-center  text-3xl bg-white-06 hover:bg-white-40 hover:opacity-75  rounded-xl overflow-hidden'>
                {url ? (
                    <Image
                        src={url}
                        width={57}
                        height={57}
                        className='object-cover h-full w-full'
                        alt='image'
                    />
                ) : (
                    <div className='ybg-radial-golden'>+</div>
                )}
            </div>
            <p className='text-white text-xs'>Add Image</p>
            <input
                name={name}
                id={name}
                type='file'
                onChange={getFileUrl}
                className='hidden'
            />
        </Label>
    )
}
