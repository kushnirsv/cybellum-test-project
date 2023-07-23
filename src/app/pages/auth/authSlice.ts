import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {User} from '../../api/auth'
import type {RootState} from '../../store'

type AuthState = {
	user: User | null
	token: string | null
	error: string | null
}

const authSlice = createSlice({
	name: 'auth',
	initialState: {user: null, token: null, error: null} as AuthState,
	reducers: {
		setCredentials: (
			state,
			{payload: {user, accessToken}}: PayloadAction<{ user: User; accessToken: string }>
		) => {
			state.user = user
			state.token = accessToken
		},
		setError: (state, {payload}: PayloadAction<string | null>) => {
			state.error = payload
		}
	}
})

export const {setCredentials, setError} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectLoginFormError = (state: RootState) => state.auth.error
