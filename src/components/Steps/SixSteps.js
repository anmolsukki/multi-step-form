import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Row } from 'reactstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from "../../assets/pdfFile.pdf";
import "../../assets/CompStyle.css";

class SixSteps extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            pageNumber: 1,
            numPages: 1
        }
    }

    componentDidMount = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render () {
        const { pageNumber, numPages } = this.state;
        const options = {
            cMapUrl: 'cmaps/',
            cMapPacked: true,
        };
        
        return (
            <div className="animated fadeIn">
                <div className="app flex-row">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="12" lg="10" xl="8">
                                <Card className="mx-10 general-info">
                                    <CardBody className="p-4">

                                        <Form >
                                            <center><h1 className="form-heading">Preview Contract</h1></center>
                                            <div md="12" lg="12" xl="12" style={{height:'500px', overflow:'auto'}}>
                                                <Document file={pdfFile} onLoadSuccess={this.onDocumentLoadSuccess} options={options} >
                                                    { Array.from(new Array(numPages),
                                                        (el, index) => (
                                                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                                                        ),
                                                    )}
                                                </Document>
                                                <p>Page {pageNumber} of {numPages}</p>
                                            </div>

                                            <div className="footerr">
                                                <Row className="footer-btn-row">
                                                    <Col xs="12" sm="4" className="order-bot">
                                                        <Button onClick={() => this.props.steps(5)} block outline color="info"><span>Back</span></Button>
                                                    </Col>
                                                    <Col xs="12" sm="4"></Col>
                                                    <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0 order-top">
                                                        <Button onClick={() => this.props.steps(7)} className="act-btn btn-block previewPDF btn-info mb-1" block><span>Save</span></Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default SixSteps;
