import React from "react";
import { Card, CardBody, Col, CardHeader, Row, Button, Table } from 'reactstrap';
import "../../assets/CompStyle.css";

class ConfirmSteps extends React.Component {
    
    render () {
        return (
            <div className="animated fadeIn">
                <Row className="app flex-row apps slider">
                    <Col sm={{ size: 1 }} lg={{ size: 2 }} xs={{size: 1}}></Col>
                    <Col sm={{ size: 10 }} lg={{ size: 8 }} xs={{size: 10}}>
                        <Card>
                            <CardHeader>
                                <center><h3 style = {{fontWeight: "bold"}} >Detail Confirmation</h3></center>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td width="20%"><b>Full Name :</b></td>
                                            <td width="80%">{this.props.finalValue.stepTwo.stepTwoInputField.firstname} {this.props.finalValue.stepTwo.stepTwoInputField.lastname}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><b>Phone :</b></td>
                                            <td>{this.props.finalValue.stepTwo.stepTwoInputField.phone}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><b>UserID :</b></td>
                                            <td>{this.props.finalValue.stepTwo.stepTwoInputField.userId}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><b>City :</b></td>
                                            <td>{this.props.finalValue.stepThree.stepThreeInputField.city}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><b>Address Line 1 :</b></td>
                                            <td>{this.props.finalValue.stepThree.stepThreeInputField.address1}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><b>Address Line 2 :</b></td>
                                            <td>{this.props.finalValue.stepThree.stepThreeInputField.address2}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><b>Zip Code :</b></td>
                                            <td>{this.props.finalValue.stepThree.stepThreeInputField.zip}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div>
                    <Row className="footerr approval">
                        <Col xs="12" sm="4" className="order-bot">
                            <Button onClick={ ()=> this.props.backStep("step1") } className="btn-block back" block outline color="info"><span>Back</span></Button>
                        </Col>
                        <Col xs="12" sm="4"></Col>
                        <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0 order-top">
                            <Button onClick={() => this.props.steps(11)} className="act-btn btn-block next btn-info mb-1" block><span>Save</span></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default ConfirmSteps;
