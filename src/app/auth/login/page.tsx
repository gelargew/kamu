import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/inputPassword';
import Link from 'next/link';
import { userLogin } from '../../actions';

export default function Login() {
	return (
		<>
			<form action={userLogin} className="mt-[60px]">
				<Input
					className="mb-[11px]"
					placeholder="Enter Username"
					name="username"
				/>
				<Input
					className="mb-[11px]"
					placeholder="Enter Email"
					name="email"
				/>
				<InputPassword placeholder="Enter Password" name="password" />
				<button className="w-full ybg-btn-gradient mt-8">
					Login
				</button>
			</form>
			<div className="flex justify-center">
				No account?{' '}
				<Link
					className="ybg-radial-golden underline mx-[0.4em] relative"
					href="/auth/register"
				>
					Register here{' '}
					<div className="absolute w-full bottom-[1px] inset-x-0 h-[1px] bg-golden" />
				</Link>
			</div>
		</>
	);
}
