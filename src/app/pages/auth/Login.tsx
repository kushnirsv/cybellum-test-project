import {Typography, Grid, Box} from '@mui/material';
import logo from '../../../assets/images/logo.svg';
import Styled from './auth.styled';
import {useForm, Controller} from 'react-hook-form';
import {ThunkDispatch, AnyAction} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '../../api/auth'
import {selectLoginFormError, setCredentials, setError} from './authSlice'
import {useNavigate} from "react-router";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputAdornment from '@mui/material/InputAdornment';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import BottomMenu from "./BottomMenu";

interface FormValues {
	email: string;
	password: string;
}

const schema = yup.object().shape({
	email: yup.string().email('Invalid email format').required('Email is required'),
	password: yup.string().required('Password is required'),
});


function Login() {
	const dispatch = useDispatch<ThunkDispatch<any, void, AnyAction>>();
	const navigate = useNavigate();
	const loginFormError = useSelector(selectLoginFormError);
	const [login] = useLoginMutation();
	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<FormValues>({
		resolver: yupResolver(schema)
	});
	
	const onSubmit = async (data: FormValues) => {
		try {
			const user = await login(data).unwrap();
			dispatch(setCredentials(user));
			navigate('/');
		} catch (err: any) {
			dispatch(setError(err.data));
		}
	};
	
	return (
		<Styled.Container fixed maxWidth="xl">
			<Grid container spacing={2}>
				<Styled.GridItem item>
					<Styled.Box>
						<Styled.Logo component="img" alt="Cybellum" image={logo}/>
						<Typography variant="h1" gutterBottom>
							Welcome to the <br/>Product Security Platform
						</Typography>
						
						<Styled.FormBox>
							<form onSubmit={handleSubmit(onSubmit)}>
								
								<Styled.InputLabel htmlFor="email">Username</Styled.InputLabel>
								<Controller
									name="email"
									control={control}
									defaultValue=""
									render={({field}) => (
										<Styled.TextField
											{...field}
											id="email"
											fullWidth
											error={!!errors?.email}
											InputProps={{
												endAdornment: (
													!!errors?.email && (
														<InputAdornment position="end">
															<ErrorOutlineOutlinedIcon/>
														</InputAdornment>
													)
												),
											}}
										/>
									)}
									rules={{required: 'Username is required'}}
								/>
								
								<Box sx={{height: 24}}/>
								
								<Styled.InputLabel htmlFor="password">Password</Styled.InputLabel>
								<Controller
									name="password"
									control={control}
									defaultValue=""
									render={({field}) => (
										<Styled.TextField
											{...field}
											id="password"
											type="password"
											fullWidth
											error={!!errors?.password}
											InputProps={{
												endAdornment: (
													!!errors?.password && (
														<InputAdornment position="end">
															<ErrorOutlineOutlinedIcon/>
														</InputAdornment>
													)
												),
											}}
										/>
									)}
									rules={{required: 'Password is required'}}
								/>
								
								<Styled.ErrorMsg>{loginFormError}</Styled.ErrorMsg>
								
								<Styled.Link to="/forgot-password">Forgot your password?</Styled.Link>
								
								<Box sx={{height: 44}}/>
								
								<Styled.Button type="submit" color="primary" fullWidth disableRipple>
									Log in
								</Styled.Button>
							</form>
						</Styled.FormBox>
					</Styled.Box>
					
					<BottomMenu/>
				</Styled.GridItem>
			</Grid>
		</Styled.Container>
	);
}

export default Login;