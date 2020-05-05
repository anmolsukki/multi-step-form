import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Row, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';
import { images } from "../../container/Constants";
import 'font-awesome/css/font-awesome.min.css';
import "../../assets/CompStyle.css";

class FourtSteps extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            activeIndex: 0
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

    }

    onExiting() {
        this.animating = true;
    }
      
    onExited() {
        this.animating = false;
    }
      
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
      
    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? images.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
      
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render () {
        const { activeIndex } = this.state;
        const slides2 = images.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.altText} >
                <img className="d-block w-100" src={item.pics} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <div className="animated fadeIn">
                <Row className="app flex-row apps slider">
                    <Col sm={{ size: 1 }} lg={{ size: 2 }} xs={{size: 1}}></Col>
                    <Col sm={{ size: 10 }} lg={{ size: 8 }} xs={{size: 10}}>
                        <Card>
                            <CardHeader>
                                <center><h3 style = {{fontWeight: "bold"}} >A Quick Tour</h3></center>
                            </CardHeader>
                            <CardBody>
                                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                                    <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                        {slides2}
                                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                                </Carousel>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={{ size: 1 }} lg={{ size: 2 }} xs={{size: 1}}></Col>
                </Row>
                <div className="footerr approval">
                    <Row className="footer-btn-row row-margin">
                        <Col xs="12" sm="4" className="order-bot">
                            <Button onClick={() => this.props.steps(3)} className="btn-block back" block outline color="info"><span>Back</span></Button>
                        </Col>
                        <Col xs="12" sm="4"></Col>
                        <Col col="6" sm="4" className="mb-3 mb-xl-0 order-top">
                            <Button onClick={() => this.props.steps(5)} className="act-btn btn-block next btn-info outline"block><span>Next</span></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default FourtSteps;
