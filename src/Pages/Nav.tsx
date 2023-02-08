import { Box, Stack } from "@mui/system";
import React from "react";
import logo from "../assets/GrowMeOrganic-Logo-300x50.png";

const Nav = () => {
	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center" mb="4rem">
			<Box component="img" src={logo} alt="Logo" />
			<Box></Box>
		</Stack>
	);
};

export default Nav;
