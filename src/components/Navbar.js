import React, { Component } from "react"
import { Tabs, Tab } from "react-bootstrap"

// Components
import Home from "./Home"
import Contact from "./Contact"

export default class Navbar extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <Home/>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Contact/>
                </Tab>
            </Tabs>
        )
    }
}