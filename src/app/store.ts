import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { authApi } from './api/auth'
import { notificationsApi } from './api/notifications'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, notificationsApi.middleware]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
