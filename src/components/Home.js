import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Components
import SimpleCard from "./SimpleCard"
import PageBanner from "./PageBanner"

export default class Home extends Component {
    render(){
        return(
            <div>

                <PageBanner 
                title="Gann4Life" 
                description="I make stuff for fun." 
                image="/img/banners/home_banner.png"/>

                <Row>
                    <Col md>
                        <SimpleCard 
                            image={process.env.PUBLIC_URL + "/img/thumbnails/gann4art.png"}
                            title="Discord Server"
                            text="Create and share content with other users!"
                            href="https://discord.gg/8USgTyxkKZ"
                        />
                    </Col>
                    <Col md>
                        <SimpleCard 
                            image={process.env.PUBLIC_URL + "/img/thumbnails/thirdym.png"}
                            title="Thirdym"
                            text="Third person tactical shooter inspired on Plazma Burst series"
                            href="https://gann4life.itch.io/thirdym"
                        />
                    </Col>
                    <Col md>
                        <SimpleCard 
                            image={process.env.PUBLIC_URL + "/img/thumbnails/toribash.png"}
                            title="Toribash"
                            text="Request and buy textures for your tori."
                            onClickEvent={() => alert("Work in Progress.")}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}