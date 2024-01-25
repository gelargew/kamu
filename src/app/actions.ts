'use server'

import { Login, Register } from '@/schemas/auth'
import { cookies } from 'next/headers'
import { Fetch } from '@/lib/fetch'
import { redirect } from 'next/navigation'
import { Profile, UpdateProfile } from '@/schemas/profile'

const userLogin = async (
    currentState: BaseErrorResponse,
    formdata: FormData,
) => {
    const entries = Object.fromEntries(formdata)
    const payload = Login.parse(entries)
    if (payload) {
        const res = await Fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(payload),
        })
        const data = await res.json()
        if (data.access_token) {
            cookies().set('token', data.access_token)
            redirect('/')

        }
        return data
    }
    return currentState
}
const userCreate = async (
    currentState: BaseErrorResponse,
    formdata: FormData,
) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const entries = Object.fromEntries(formdata)
    const payload = Register.safeParse(entries)
    if (!payload.success) {
        return {
            errors: payload.error.errors,
            message: 'Missing Fields. Failed to Create User.',
        }
    }

    if (payload.data) {
        const res = await Fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(payload.data),
        })
        const data = await res.json()
        if (data.message == 'User has been created successfully') {
            redirect('/auth/login')
        }
        return data
    }

    return currentState
}

const userProfile = async () => {
    const res = await Fetch('/api/getProfile').then(res => res.json())
    const data = Profile.safeParse(res.data)

    if (!data.success) {
        cookies().delete('token')
        redirect('/auth/login')
    }

    return data.data
}

const userEditProfile = async (interests: string, formdata: FormData) => {
    const entries = Object.fromEntries(formdata)
    const payload = UpdateProfile.parse(entries)
    payload.interests = JSON.parse(interests)
    if (payload) {
        const res = await Fetch('/api/updateProfile', {
            method: 'PUT',
            body: JSON.stringify(payload),
        })
        if (res.ok) {
            redirect('/')
        }
    }
}

const userUpdateInterest = async (
    profile: Omit<Profile, 'interests'>,
    formdata: FormData,
) => {
    const entries = Object.fromEntries(formdata)
    const payload = {
        ...profile,
        interests: JSON.parse(entries.interests as string),
    }
    if (payload) {
        const res = await Fetch('/api/updateProfile', {
            method: 'PUT',
            body: JSON.stringify(payload),
        })
        if (res.ok) {
            redirect('/')
        }
    }
}

const logout = async () => {
    cookies().delete('token')
}

export {
    userLogin,
    userCreate,
    userProfile,
    userEditProfile,
    userUpdateInterest,
    logout,
}
