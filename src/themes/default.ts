import {red} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	breakpoints: {
		values: {
			lg: 1536,
			md: 1200,
			sm: 900,
			xl: 1920,
			xs: 600
		}
	},
	typography: {
		fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
		fontSize: 16,
		h1: {
			fontSize: '3.5rem',
			fontStyle: 'normal',
			fontWeight: 300,
			lineHeight: '4rem',
			letterSpacing: '-0.5px',
			color: '#1C1B1F',
			[`@media (max-width: 1200px)`]: {
				fontSize: '2rem',
				lineHeight: '2.5rem',
			},
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					height: '100%',
					scrollBehavior: 'smooth',
				},
				body: {
					WebkitFontSmoothing: 'antialiased',
					MozOsxFontSmoothing: 'grayscale',
					fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
					height: '100%',
					overflowY: 'scroll',
					backgroundColor: '#fff',
					color: '#4d4d4d'
				},
			},
		},
	},
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#BAA182',
			dark: '#2A2118',
			contrastText: '#4D4D4D',
			light: '#7b7b7b'
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#f8f8f8',
		},
	},
});

export default theme;
