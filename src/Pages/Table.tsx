import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Nav from "./Nav";
import { Alert } from "@mui/material";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "name",
		headerName: "Full Name",
		width: 150,
		editable: true,
	},
	{
		field: "email",
		headerName: "Email",
		width: 150,
		editable: true,
	},
	{
		field: "body",
		headerName: "Details",
		width: 300,
		editable: true,
	},
];

const Table = () => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState<Post[]>([]);
	const [user, setUser] = React.useState();

	useEffect(() => {
		const info = localStorage.getItem("userInfo");
		if (info) {
			setUser(JSON.parse(info));
		} else {
			navigate("/");

			<Alert severity="error" color="error">
				You must have to enter your details.
			</Alert>;
		}
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	interface Post {
		userId: number;
		id: number;
		title: string;
		body: string;
	}
	return (
		<Box>
			<Nav />

			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Box sx={{ height: 400, width: { xs: "100%", md: "70%", lg: "60%" } }}>
					<DataGrid
						rows={posts}
						columns={columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						checkboxSelection
						disableSelectionOnClick
						experimentalFeatures={{ newEditingApi: true }}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Table;
