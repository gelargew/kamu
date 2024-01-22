'use server';

import { Login, Register } from '@/schemas/auth';
import { cookies } from 'next/headers';
import { Fetch } from '@/lib/fetch';
import { redirect } from 'next/navigation';
import { Profile } from '@/schemas/profile';

const userLogin = async (formdata: FormData) => {
	const entries = Object.fromEntries(formdata);
	const payload = Login.parse(entries);
	await new Promise((resolve) => setTimeout(resolve, 2000));
	if (payload) {
		const res = await Fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(payload),
		});
		if (res.ok) {
			const data = await res.json();
			cookies().set('token', data.access_token);
			redirect('/');
		}
	}
};
const userCreate = async (
	currentState: BaseErrorResponse,
	formdata: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
	const entries = Object.fromEntries(formdata);
	const payload = Register.safeParse(entries);
	if (!payload.success) {
		return {
			errors: payload.error.errors,
			message: 'Missing Fields. Failed to Create User.',
		};
	}

	if (payload.data) {
		const res = await Fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify(payload.data),
		});
		const data = await res.json();
		if (res.ok) {
			redirect('/auth/login');
		}
		return data;
	}

	return currentState
};

const userProfile = async () => {
	const res = await Fetch('/api/getProfile').then((res) =>
		res.json()
	);
	return res as BaseResponse<Profile>;
};

const userEditProfile = async (formdata: FormData) => {
	const entries = Object.fromEntries(formdata);
	const payload = Register.parse(entries);
	if (payload) {
		const res = await Fetch('/api/updateProfile', {
			method: 'PUT',
			body: JSON.stringify(payload),
		});
		if (res.ok) {
			redirect('/');
		}
	}
};

export { userLogin, userCreate, userProfile, userEditProfile };
