import { Component } from "react"
import PageBanner from "./PageBanner"

import Button from "react-bootstrap/Button"

export default class Contact extends Component {
    render() {
        return(
            <div className="text-center">
                <PageBanner title="Contact" description="Work in Progress."/>
                <Button onClick={this.props.onClick}>Press me!</Button>
            </div>
        )
    }
}