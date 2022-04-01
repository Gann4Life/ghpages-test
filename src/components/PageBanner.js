
import React, { Component } from "react"

export default class PageBanner extends Component {
    render() {
        return(
            <div className="text-center">
                <h1 className="my-5">{this.props.title}</h1>
                <p className="my-5">{this.props.description}</p>
                <hr />
                <img className="page-banner" src={process.env.PUBLIC_URL + this.props.image} alt=""/>
            </div>
        )
    }
}
