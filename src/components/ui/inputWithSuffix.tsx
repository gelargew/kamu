import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    suffix: string
}

const KEYS = [
    'Enter',
    'Backspace',
    'Tab',
    'Meta',
    'Control',
    'Alt',
    'ArrowLeft',
    'ArrowRight',
]

const InputWithSuffix = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, defaultValue, ...props }, ref) => {
        const [val, setVal] = React.useState(defaultValue || '')
        return (
            <div
                className={cn(
                    'flex h-[51px] w-full border border-solid border-white-22 rounded-[9px] text-[13px] bg-white-06 px-[18px] py-1 transition-colors placeholder:text-white-40 focus:border-white-40 read-only:text-white-33 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
            >
                <input
                    onChange={e => setVal(e.target.value)}
                    onKeyDown={e => {
                        if (!/[0-9]/.test(e.key) && !KEYS.includes(e.key)) {
                            e.preventDefault()
                        }
                    }}
                    value={val}
                    className='bg-transparent text-[13px] placeholder:text-white-40 focus:outline-none text-right'
                    type={type}
                    ref={ref}
                    {...props}
                />
                {val && <span>{props.suffix}</span>}
            </div>
        )
    },
)
InputWithSuffix.displayName = 'InputWithSuffix'

export { InputWithSuffix }
