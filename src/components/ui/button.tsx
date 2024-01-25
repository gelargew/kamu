import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

const BackButton = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'a'>) => {
    return (
        <Link
            className={cn('flex gap-2 items-center text-[14px]')}
            href='/'
            {...props}
        >
            <Image
                className='h-[14px] w-auto'
                src='/icons/chevronLeft.svg'
                width={7}
                height={14}
                alt='chevronLeft'
            />
            Back
        </Link>
    )
}

export {BackButton}