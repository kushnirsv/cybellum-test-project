import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from '../store'

export interface User {
	email: string
	id: number
}

export interface UserResponse {
	user: User
	accessToken: string
}

export interface LoginRequest {
	email: string
	password: string
}

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:7000',
		prepareHeaders: (headers, {getState}) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = (getState() as RootState).auth.token
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<UserResponse, LoginRequest>({
			query: (credentials) => ({
				url: '/login',
				method: 'POST',
				body: credentials,
			}),
		})
	})
})

export const {useLoginMutation} = authApi
