import {memo, useEffect} from "react";
import {Card, CardContent, Typography} from '@mui/material';
import {iNotification, useNotificationMutation} from "../../api/notifications";
import {useDispatch, useSelector} from "react-redux";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {selectCurrentNotification, setNotification} from './notificationSlice';
import Styled from './notifications.styled';

const Notification = memo(function () {
	const dispatch = useDispatch<ThunkDispatch<any, void, AnyAction>>();
	const [notification] = useNotificationMutation();
	const currentNotification: iNotification | null = useSelector(selectCurrentNotification);
	
	
	useEffect(() => {
		const fetchNotification = async () => {
			const response: iNotification = await notification(1).unwrap();
			await dispatch(setNotification(response));
		}
		
		fetchNotification().catch(console.error);
	}, []);
	
	return (
		<Styled.NotificationBox>
			<Card sx={{maxWidth: 345, textAlign: 'center'}}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div" sx={{mt: 4}}>
						{currentNotification?.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{currentNotification?.description}
					</Typography>
				</CardContent>
			</Card>
		</Styled.NotificationBox>
	
	);
})

export default Notification;
