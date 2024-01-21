import { userCreate } from '@/app/auth/actions';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/inputPassword';
import Link from 'next/link';

export default function Login() {
	return (
		<>
			<form action={userCreate} className="mt-[60px]">
      <Input
					className="mb-[11px]"
					placeholder="Enter Email"
					name="email"
          type='email'
				/>
				<Input
					className="mb-[11px]"
					placeholder="Create Username"
					name="username"
				/>
				<InputPassword className='mb-[11px]' placeholder="Create Password" name="password" />
        <InputPassword placeholder="Confirm Password" name="confirm_password" />
				<button className="w-full ybg-btn-gradient mt-8" disabled>
					Register
				</button>
			</form>
			<div className="flex justify-center">
				Have an account?{' '}
				<Link
					className="ybg-radial-golden underline mx-[0.4em] relative"
					href="/auth/login"
				>
					Register here{' '}
					<div className="absolute w-full bottom-[1px] inset-x-0 h-[1px] bg-golden" />
				</Link>
			</div>
		</>
	);
}
