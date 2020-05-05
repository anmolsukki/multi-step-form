import React from "react";
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import "../../assets/CompStyle.css";

class FirstSteps extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            password: "",
            confirmPassword : "",
            passMessage : null,
            passGood : null,
            confPassMessage : null,
            confPassGood: null,
            passBtnDisabled : true,
            passHidden: true,
            confPassHidden: true
        }
    }

    validatePass = (key, value) => {
        this.setState({ [key]: value });
        if(this.state.password.length < 7) {
            this.setState({
                passMessage : "Password must be greater than 8 characters",
                passGood: null
            })
        }
        else {
            this.setState({
                passMessage : null
            });
            var found = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])(?=.{7,})").test(this.state.password)
            if(!found) {
                this.setState({
                    passMessage : "At least 1 Number, Upper case and special character",
                    passGood: null
                });
            }
            else {
                if (this.state.password.length >= 7) {
                    this.setState({
                        passGood : "Password Strength: Good"
                    })
                }
                else {
                    this.setState({
                        passGood : null
                    });
                }
            }
        }
    }

    confirmPass = (key, value) => {
        this.setState({ [key]: value });
        if(value !== this.state.password) {
            this.setState({
                confPassMessage : "Password do not match",
                confPassGood: null,
                passBtnDisabled : true
            });
        }
        else {
            this.setState({
                confPassMessage: null,
                confPassGood : "Password match",
                passBtnDisabled : false
            });
        }
    }

    render () {
        return (
            <div>
                <div className="animated fadeIn" style={{marginTop: "20px"}}>
                    <div className="app flex-row new-res">
                        <Container>
                            <Row className="justify-content-center">
                                <Col md="12" lg="12" xl="8" >
                                    <CardGroup>
                                        <Card className="p-4 res-p ipad-s">
                                            <CardBody>
                                                <Form>
                                                    <h3 className="head-res">Set a new password</h3>
                                                    <InputGroup className="mb-4 res-m4">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="icon-lock"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input type={ this.state.passHidden ? 'password' : 'text' } placeholder="Password" autoComplete="password"
                                                            className="f-size" value={this.state.password} maxLength={50}
                                                            onChange={event => this.validatePass("password", event.target.value)} />
                                                        <InputGroupText>
                                                            <div className="icon-parts" onClick={() => this.setState({ passHidden: !this.state.passHidden }) } >
                                                                <i className={ this.state.passHidden ? 'fa fa-eye-slash' : 'fa fa-eye' }
                                                                    style={{ fontSize: 16, color: '#C4C4C4', cursor: 'pointer' }}
                                                                />
                                                            </div>
                                                        </InputGroupText>
                                                        <span className="validation-error" style={{color:"red"}}>{this.state.passMessage}</span>
                                                        <span className="validation-error" style={{color:"SteelBlue"}}>{this.state.passGood}</span>
                                                    </InputGroup>
                                                    
                                                    <InputGroup className="mb-4 res-m4">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="icon-lock"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input type={ this.state.confPassHidden ? 'password' : 'text' } placeholder="Confirm Password" className="f-size"
                                                            value={this.state.confirmPassword} maxLength={50}
                                                            onChange={event => this.confirmPass("confirmPassword", event.target.value)} />
                                                        <InputGroupText>
                                                            <div className="icon-parts" onClick={() => this.setState({ confPassHidden: !this.state.confPassHidden }) } >
                                                                <i className={ this.state.confPassHidden ? 'fa fa-eye-slash' : 'fa fa-eye' }
                                                                    style={{ fontSize: 16, color: '#C4C4C4', cursor: 'pointer' }}
                                                                />
                                                            </div>
                                                        </InputGroupText>
                                                        <span className="validation-error" style={{color:"red"}}>{this.state.confPassMessage}</span>
                                                        <span className="validation-error" style={{color:"SteelBlue"}}>{this.state.confPassGood}</span>
                                                    </InputGroup>
                                                    <Row>
                                                        <Col xs="6">
                                                            <Button onClick={() => this.props.step("step1")}
                                                                disabled={this.state.passBtnDisabled} active block color="info" 
                                                                aria-pressed="true" className="save-class">Save
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </CardBody>
                                        </Card>

                                        <Card className="text-white bg-primary py-5 d-md-down-none resp-down res-p" style={{ width: '50%' }}>
                                            <CardBody className="text-center">
                                                <div className="wlcm-heading">
                                                    <h2>Welcome To<br/></h2>
                                                    <h2>ARCHIMYDES</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                        labore et dolore magna aliqua.
                                                    </p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </CardGroup>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstSteps;
