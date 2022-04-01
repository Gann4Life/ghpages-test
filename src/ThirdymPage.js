import { Component } from "react";
import { Row, Col, Container } from "react-bootstrap"
import PageBanner from "./components/PageBanner";
import SimpleCard from "./components/SimpleCard"

export default class ThirdymPage extends Component {
    render() {
        return(
            <div>
                <a className="selectable-card" href="/">Back</a>
                <PageBanner 
                title="Thirdym" 
                description="Game's development has been paused. Join my discord server to stay tuned. "
                image="/img/banners/home_banner.png" 
                />
                
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <p className="p-5 text-start">
                                    <b>Thirdym is a fan-made sci-fi third person tactical shooter game inspired on Eric Gurt’s plazma burst series. <br /></b>
                                    <br />
                                    It is set in a post-apocalyptic world, where humans are fighting against a mysterious, alien race known as the Usurpation Forces.  <br />
                                    The player is tasked with surviving through fight sequences that involve combat scenarios in which they fight both factions, as well as other non-affiliated enemies. <br />
                                    <br />
                                    You play as Noir Lime, one of the two warriors that was sent back in time along with the Marine to correct the course of events. <br />
                                    <br />
                                    After Noir Lime gets critically wounded by Sword Bot he returns to Earth in a Falkonian Ship and reunited with his teammate. <br />
                                    <br />
                                    Noir Lime was able to make it to the next Time Machine along with the Marine and Proxy.
                                </p>
                                <iframe title="Thirdym Itchio" src="https://itch.io/embed/1374576?linkback=true&amp;dark=true" width="552" height="167" frameborder="0"><a href="https://gann4life.itch.io/thirdym">Thirdym by Gann4Life</a></iframe>
                            </div>
                        </Col>
                        <Col lg>
                            <Row>
                                <Col lg>
                                    <SimpleCard image="https://img.itch.zone/aW1hZ2UvMTM3NDU3Ni84MDA1MDIzLnBuZw==/347x500/vfN9Rw.png"/>
                                    <br />
                                    <SimpleCard image="https://img.itch.zone/aW1hZ2UvMTM3NDU3Ni84MDA1MDI1LnBuZw==/347x500/wn%2B9KI.png"/>
                                </Col>
                                <Col lg>
                                    <SimpleCard image="https://img.itch.zone/aW1hZ2UvMTM3NDU3Ni84MDA1MDI2LnBuZw==/347x500/Jm6mRl.png"/>
                                    <br />
                                    <SimpleCard image="https://img.itch.zone/aW1hZ2UvMTM3NDU3Ni84MDA1MDI3LnBuZw==/347x500/CeoRe0.png"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}