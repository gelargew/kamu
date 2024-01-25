'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false)
        return (
            <div className='relative'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={cn(
                        'flex h-[51px] w-full border border-solid border-white-22 rounded-[9px] text-[13px] bg-white-06 px-[18px] py-1 transition-colors placeholder:text-white-40 focus:border-white-40 read-only:text-white-33 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
                <Image
                    src='/icons/eye.svg'
                    width={20}
                    height={17}
                    alt='show password'
                    onClick={() => setShowPassword(prev => !prev)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 active:opacity-60 transition-all'
                />
            </div>
        )
    },
)
InputPassword.displayName = 'InputPassword'

export { InputPassword }
