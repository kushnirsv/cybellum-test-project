import React from 'react';
import {ListItem} from "@mui/material";
import Styled from "./auth.styled";

function BottomMenu() {
	return (
		<Styled.BottomMenu>
			<ListItem>
				<Styled.MenuLink to="/privacy-policy">Privacy Policy</Styled.MenuLink>
			</ListItem>
			<ListItem>
				<Styled.MenuLink to="/terms">Terms</Styled.MenuLink>
			</ListItem>
			<ListItem>
				<Styled.MenuLink to="/contact-us">Contact Us</Styled.MenuLink>
			</ListItem>
		</Styled.BottomMenu>
	)
}

export default BottomMenu;
