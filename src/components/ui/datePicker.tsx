'use client'

import * as React from 'react'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

export function DatePicker({
    name,
    date,
    setDate,
}: {
    name: string
    date?: Date
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}) {
    return (
        <>
            <input
                type='hidden'
                name={name}
                value={date ? format(date, 'yyyy-MM-dd') : ''}
            />
            <Popover>
                <PopoverTrigger asChild>
                    <button
                        className={cn(
                            'w-full h-9 justify-end text-right flex items-center font-medium border border-solid border-white-22 rounded-[9px] text-[13px] bg-white-06 px-[18px] py-1 transition-colors placeholder:text-white-40 focus:border-white-40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                            !date && 'text-muted-foreground',
                        )}
                    >
                        {date ? (
                            format(date, 'dd MM yyyy')
                        ) : (
                            <span className='text-white-33'>DD MM YYYY</span>
                        )}
                    </button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                    <Calendar
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </>
    )
}
