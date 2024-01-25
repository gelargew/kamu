import Link from 'next/link'
import { Form } from './form'

export default function Login() {
    return (
        <>
            <Form />
            <div className='flex justify-center'>
                No account?{' '}
                <Link
                    className='ybg-radial-golden underline mx-[0.4em] relative'
                    href='/auth/register'
                >
                    Register here{' '}
                    <div className='absolute w-full bottom-[1px] inset-x-0 h-[1px] bg-golden' />
                </Link>
            </div>
        </>
    )
}
