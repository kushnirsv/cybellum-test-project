import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../../store'
import {iNotification} from "../../api/notifications";

type NotificationState = {
	topic: iNotification | null
}

const slice = createSlice({
	name: 'notification',
	initialState: {topic: null} as NotificationState,
	reducers: {
		setNotification: (
			state,
			{payload}: PayloadAction<iNotification>
		) => {
			state.topic = payload;
		},
	}
})

export const {setNotification} = slice.actions

export default slice.reducer

export const selectCurrentNotification = (state: RootState) => state.notification.topic
