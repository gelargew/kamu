'use server';

import { Login } from '@/schemas/auth';
import { APP_CONFIG } from '../../../config/app';
import { cookies } from 'next/headers';
import { Fetch } from '@/lib/fetch';
import { redirect } from 'next/navigation';

const userLogin = async (formdata: FormData) => {
	const entries = Object.fromEntries(formdata);
	const payload = Login.parse(entries);
	if (payload) {
		const res = await Fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(payload),
		});
    // cookies().delete('token');
    const d = await res.json()
    console.log('d', d)
		if (res.ok) {
			const data = await res.json();
      cookies().set('token', data.access_token);
      console.log('cookies', cookies().get('token'))
      // redirect('/');
		}
	}
	// throw new Error('Invalid credentials');
};
const userCreate = async (formdata: FormData) => {
	const entries = Object.fromEntries(formdata);
	const payload = Login.parse(entries);
	if (payload) {
		const res = await Fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(payload),
		});
		if (res.ok) {
			const data = await res.json();
      cookies().set('token', data.access_token);
      redirect('/auth/login');
		}
	}
	// throw new Error('Invalid credentials');
};


export { userLogin, userCreate }