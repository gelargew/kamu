'use client'

import { userCreate, userLogin } from '@/app/actions'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/inputPassword'
import { useFormState, useFormStatus } from 'react-dom'

export const Form = () => {
    const [state, dispatch] = useFormState(userCreate, {} as BaseErrorResponse)
    return (
        <form action={dispatch} className='mt-[60px]'>
            <Input
                className='mb-[11px]'
                placeholder='Enter Username'
                name='username'
            />
            <Input
                className='mb-[11px]'
                placeholder='Enter Email'
                name='email'
                type='email'
            />
            <InputPassword placeholder='Enter Password' name='password' />
            <Login />
            {JSON.stringify(state)}
        </form>
    )
}

const Login = () => {
    const { pending } = useFormStatus()
    return (
        <button
            disabled={pending}
            aria-disabled={pending}
            className='w-full ybg-btn-gradient mt-8'
        >
            Login
        </button>
    )
}
