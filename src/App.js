import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap";

// Components
import Navbar from "./components/Navbar"
import ThirdymPage from "./ThirdymPage"

function App() {
	return (
		<Container fluid>
			<BrowserRouter>
				<Routes>
					<Route path={process.env.PUBLIC_URL + "/"} element={<Navbar/>}/>
					<Route path={process.env.PUBLIC_URL + "/thirdym"} element={<ThirdymPage/>}/>
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
