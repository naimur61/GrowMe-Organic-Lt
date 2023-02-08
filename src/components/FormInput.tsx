import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

type Inputs = {
	name: string;
	email: string;
	phone: string;
};

const FormInput = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Box
			sx={{
				alignItems: "center",
				display: "flex",
				height: "80vh",
				justifyContent: "center",
				background: "#EEF2FE",
			}}
		>
			<Box
				sx={{
					background: " #fff",
					border: " 1px solid #eee",
					borderRadius: " 3px",
					boxShadow: " 0 2px 5px -4px grey",
					margin: " auto",
					padding: " 20px",
					width: { xs: "75%", md: "60%", lg: "30%" },
				}}
			>
				<Box
					sx={{
						fontSize: "30px",
						fontWeight: "600",
						textAlign: "center",
						mb: "20px",
					}}
				>
					Signup
				</Box>
				<Box component="form" onSubmit={handleSubmit(onSubmit)}>
					{/* name  */}
					<TextField
						sx={{
							fontSize: 20,
							fontWeight: "900",
						}}
						id="outlined-basic"
						label="Full Name"
						variant="standard"
						size="small"
						fullWidth
						error={!!errors?.name}
						helperText={errors?.name?.message}
						{...register("name", { required: "Please enter your Full Name." })}
					/>

					{/* phone  */}
					<TextField
						sx={{
							fontSize: 20,
							fontWeight: "900",
						}}
						id="outlined-basic"
						label="Phone Number"
						variant="standard"
						size="small"
						fullWidth
						error={!!errors?.phone}
						helperText={errors?.phone?.message}
						{...register("phone", { required: "Please enter your phone number." })}
					/>

					{/* Email  */}
					<TextField
						sx={{
							fontSize: 20,
							fontWeight: "900",
						}}
						id="outlined-basic"
						type="email"
						label="Email"
						variant="standard"
						size="small"
						fullWidth
						error={!!errors?.email}
						helperText={errors?.email?.message}
						{...register("email", { required: "Please enter your email." })}
					/>
					<Button type="submit" fullWidth={true} variant="contained" sx={{ my: "20px" }}>
						Signup
					</Button>
					{/* <ToastContainer /> */}
				</Box>
			</Box>
		</Box>
	);
};

export default FormInput;
