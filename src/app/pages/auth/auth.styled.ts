import BoxMui from '@mui/material/Box';
import CardMediaMui from '@mui/material/CardMedia';
import ContainerMui from '@mui/material/Container';
import List from '@mui/material/List';
import {Link as RouteLink} from "react-router-dom";
import Grid from '@mui/material/Grid';
import ButtonMui from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import loginPreview from '../../../assets/images/login-preview.svg';
import InputLabelMui from '@mui/material/InputLabel';
import TextFieldMui from '@mui/material/TextField';

const InputLabel = styled(InputLabelMui)(({theme}) => ({
	fontSize: theme.typography.pxToRem(14),
	fontWeight: 400,
	lineHeight: theme.typography.pxToRem(20),
	letterSpacing: '0.25px',
	padding: '0 16px'
})) as unknown as typeof InputLabelMui;

const TextField = styled(TextFieldMui)(({theme}) => ({
	'& .MuiOutlinedInput-root': {
		height: 48,
		'& input:-internal-autofill-selected': {
			backgroundColor: 'transparent !important',
			padding: '10px 16px'
		},
		'& fieldset': {
			borderColor: theme.palette.secondary.light,
		},
		'&:hover fieldset': {
			borderColor: theme.palette.secondary.contrastText,
		},
		'&.Mui-error:hover fieldset': {
			borderColor: theme.palette.error.main,
		},
		'&.Mui-focused fieldset': {
			borderColor: theme.palette.secondary.contrastText,
			borderWidth: 1
		},
		'& svg': {
			fill: theme.palette.error.main
		}
	},
})) as unknown as typeof TextFieldMui;

const Box = styled(BoxMui)(({theme}) => ({
	width: '100%',
	marginTop: theme.spacing(4),
	
	[theme.breakpoints.up('md')]: {
		width: 636,
		marginTop: theme.spacing(24),
	}
}));

const Link = styled(RouteLink)(({theme}) => ({
	color: theme.palette.secondary.contrastText,
	fontSize: theme.typography.pxToRem(14),
	fontWeight: 500,
	lineHeight: theme.typography.pxToRem(20),
	letterSpacing: '0.1px',
	textDecoration: 'none',
	padding: '2px 4px',
	borderRadius: theme.shape.borderRadius,
	transition: theme.transitions.easing.easeIn,
	'&:hover': {
		backgroundColor: theme.palette.background.default
	}
}));

const MenuLink = styled(RouteLink)(({theme}) => ({
	color: theme.palette.secondary.contrastText,
	whiteSpace: 'nowrap',
	fontSize: theme.typography.pxToRem(16),
	fontWeight: 500,
	lineHeight: theme.typography.pxToRem(24),
	letterSpacing: '0.1px',
	textDecoration: 'none',
	padding: '2px 4px',
	borderRadius: theme.shape.borderRadius,
	transition: theme.transitions.easing.easeIn,
	'&:hover': {
		backgroundColor: theme.palette.background.default
	}
}));

const GridItem = styled(Grid)(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	paddingTop: theme.spacing(24),
	paddingBottom: theme.spacing(5),
	
	[theme.breakpoints.up('lg')]: {
		marginLeft: 100,
	},
	[theme.breakpoints.up('xl')]: {
		marginLeft: 160,
	},
}));

const FormBox = styled(BoxMui)(() => ({
	width: 400,
	paddingTop: 5
}));

const BottomMenu = styled(List)(() => ({
	marginTop: 50,
	width: 400,
	display: 'flex',
	justifyContent: 'space-between',
	'& li': {
		padding: 0,
		width: 'auto'
	}
}));

const Logo = styled(CardMediaMui)(({theme}) => {
	return {
		objectFit: 'unset',
		width: 150,
		display: 'inline-block',
	};
}) as typeof CardMediaMui;

const Container = styled(ContainerMui)(({theme}) => {
	return {
		display: 'flex',
		justifyContent: 'center',
		objectFit: 'unset',
		height: 'auto',
		minHeight: '100vh',
		backgroundPosition: 'right',
		backgroundRepeat: 'no-repeat',
		
		'> div': {
			justifyContent: 'center',
			
			[theme.breakpoints.up('md')]: {
				justifyContent: 'start'
			}
		},
		
		[theme.breakpoints.up('md')]: {
			backgroundImage: `url(${loginPreview})`,
			backgroundSize: '600px auto'
		},
		[theme.breakpoints.up('lg')]: {
			backgroundSize: '850px auto'
		},
		[theme.breakpoints.up('xl')]: {
			backgroundSize: '1237px auto'
		},
	};
}) as unknown as typeof ContainerMui;

const Button = styled(ButtonMui)(({theme}) => {
	return {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.dark,
		fontSize: theme.typography.fontSize,
		textTransform: 'none',
		height: 40,
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[0],
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "0px 1px 3px 1px rgba(28, 27, 31, 0.15), 0px 1px 2px 0px rgba(28, 27, 31, 0.30)"
		}
	};
}) as unknown as typeof ButtonMui;

const ErrorMsg = styled(Typography)(({theme}) => {
	return {
		color: theme.palette.error.main,
		fontSize: theme.typography.pxToRem(14),
		padding: '5px'
	};
});


export default {
	Logo,
	Box,
	FormBox,
	Container,
	BottomMenu,
	GridItem,
	Button,
	Link,
	MenuLink,
	InputLabel,
	TextField,
	ErrorMsg,
};
