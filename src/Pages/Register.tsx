import { Box } from "@mui/material";
import React from "react";
import FormInput from "../components/FormInput";

const Register = () => {
	return (
		<Box
			sx={{
				alignItems: "center",
				display: "flex",
				height: "100vh",
				justifyContent: "center",
				background: "#EEF2FE",
			}}
		>
			<FormInput />
		</Box>
	);
};

export default Register;
