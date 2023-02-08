import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Table from "./Pages/Table";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/table" element={<Table />} />
			</Routes>
		</Router>
	);
};

export default App;
