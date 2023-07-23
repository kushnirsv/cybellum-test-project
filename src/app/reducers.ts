import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './api/auth'
import { notificationsApi } from './api/notifications'
import authReducer from './pages/auth/authSlice';
import notificationReducer from './pages/notifications/notificationSlice';

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[notificationsApi.reducerPath]: notificationsApi.reducer,
	auth: authReducer,
	notification: notificationReducer
});

export default rootReducer;
