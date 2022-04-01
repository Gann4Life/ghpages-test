import "./App.css"
import { Container, Tabs, Tab } from "react-bootstrap";
import { useState } from "react"

// Components
import Home from "./components/Home"
import Contact from "./components/Contact"

function App() {

	const [key, setKey] = useState("home")

	return (
		<Container fluid>
			<Tabs 
				id="controlled-tab-example" 
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className="mb-3"
			>
                <Tab eventKey="home" title="Home">
                    <Home/>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Contact onClick={() => setKey("home")}/>
                </Tab>
            </Tabs>
		</Container>
	);
}

export default App;
