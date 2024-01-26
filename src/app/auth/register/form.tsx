'use client'

import { userCreate } from '@/app/actions'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/inputPassword'
import { useFormState, useFormStatus } from 'react-dom'

export const RegisterForm = () => {
    const [state, dispatch] = useFormState(userCreate, {} as BaseErrorResponse)

    return (
        <form action={dispatch} className='mt-[60px]'>
            <Input
                className='mb-[11px] border-white-06'
                placeholder='Enter Email'
                name='email'
                type='email'
            />
            <Input
                className='mb-[11px] border-white-06'
                placeholder='Create Username'
                name='username'
            />
            <InputPassword
                className='mb-[11px]'
                placeholder='Create Password'
                name='password'
            />
            <InputPassword
                placeholder='Confirm Password'
                name='confirm_password'
            />
            <Register />
            {state.message && (
                <p className='text-xs text-red-500 mt-2'>{state.message}</p>
            )}
        </form>
    )
}

const Register = () => {
    const { pending } = useFormStatus()
    return (
        <button
            disabled={pending}
            aria-disabled={pending}
            className='w-full ybg-btn-gradient mt-8'
        >
            Register
        </button>
    )
}
