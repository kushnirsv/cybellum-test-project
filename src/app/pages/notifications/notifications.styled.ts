import BoxMui from '@mui/material/Box';
import {styled} from '@mui/material/styles';

const NotificationBox = styled(BoxMui)(() => ({
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)'
}));

export default {NotificationBox}
