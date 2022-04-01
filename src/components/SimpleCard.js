import { Component } from "react"
import Card from "react-bootstrap/Card"

export default class HomeCard extends Component {
    render() {
        return(
            <Card className={"m-5" + this.props.className}>
                <a className="selectable-card" href={this.props.href} onClick={this.props.onClickEvent}>
                    <Card.Img className="selectable-card" src={this.props.image}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card.Body>
                </a>
            </Card>
        )
    }
}