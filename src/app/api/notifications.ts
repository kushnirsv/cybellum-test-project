import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from '../store'

export interface iNotification {
	id: number,
	title: string,
	description: string,
	created: string
}

export const notificationsApi = createApi({
	reducerPath: "notificationsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:7000/notifications',
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
		notifications: builder.mutation<iNotification[], unknown>({
			query: () => ({
				url: '/',
				method: 'GET',
			}),
		}),
		notification: builder.mutation<iNotification, number>({
			query: (notificationId: number) => ({
				url: `/${notificationId}`,
				method: 'GET',
			}),
		}),
	}),
})

export const {useNotificationsMutation, useNotificationMutation} = notificationsApi
