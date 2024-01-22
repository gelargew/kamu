import { userCreate } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/inputPassword';
import Link from 'next/link';
import { RegisterForm } from './form';

export default function Login() {
	return (
		<>
      <RegisterForm />
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
