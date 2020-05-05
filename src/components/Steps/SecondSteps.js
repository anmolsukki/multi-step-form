import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import "../../assets/CompStyle.css";

class SecondSteps extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            fields: this.props.stepTwoInputValue,
            errors: {},
        }
    }

    generalValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
      
        if(!fields["firstname"]){
            formIsValid = false;
            errors["firstname"] = "First Name cannot be empty";
        }
        if(typeof fields["firstname"] !== "undefined"){
            if(!fields["firstname"].match("^[a-zA-Z ]*$")){
                formIsValid = false;
                errors["firstname"] = "Only alphabets are allowed";
            }
        }
      
        if(!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "Last Name cannot be empty";
        }
        if(typeof fields["lastname"] !== "undefined"){
            if(!fields["lastname"].match("^[a-zA-Z ]*$")){
                formIsValid = false;
                errors["lastname"] = "Only alphabets are allowed";
            }
        }

        if(!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Phone Number cannot be empty";
        }
        if(typeof fields["phone"] !== "undefined")  {
            if(!fields["phone"].match(/^\d{10}(?:[-\s]\d{4})?$/)){
                formIsValid = false;
                errors["phone"] = "Phone should contain only 10 numbers";
            }
        }
      
        if(!fields["userId"]) {
            formIsValid = false;
            errors["userId"] = "IM User Id cannot be empty";
        }
        if(typeof fields["userId"] !== "undefined"){
            if(!fields["userId"].match("^[a-z0-9_-]{3,15}$")){
                formIsValid = false;
                errors["userId"] = "Invalid UserID";
                errors["userId1"] = "UserID Example: (jack123, 123jack, jack_123, 123-jack)";
            }
        }
      
        this.setState({errors: errors});
            return formIsValid;
        }
      
    generalSubmit = (e) => {
        e.preventDefault();
        if(this.generalValidation()) {
            this.setState({
                steps: this.props.steps(3)
            })
        }
        else {
            alert("Please fill Required field")
        }
    }

    handleInput = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render () {
        return (
            <div className="animated fadeIn">
                <div className="app flex-row">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="12" lg="10" xl="6">
                                <Card className="mx-4 general-info">
                                    <CardBody className="p-4">

                                        <Form onSubmit= {this.generalSubmit.bind(this)} >
                                            <h1 className="form-heading">General Information</h1>

                                            <InputGroup className="mb-3">
                                                <div className="label">First Name*</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" autoFocus={true} name="firstname" maxLength={25}
                                                    ref="firstname" onChange={this.handleInput.bind(this, "firstname")}
                                                    value={this.state.fields["firstname"] || ""} />
                                                <span className="validation-error" style={{color:"red"}}>{this.state.errors["firstname"]}</span>
                                            </InputGroup>

                                            <InputGroup className="mb-3">
                                                <div className="label">Last Name*</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" autoComplete="lastname" maxLength={25}
                                                    ref="lastname" onChange={this.handleInput.bind(this, "lastname")}
                                                    value={this.state.fields["lastname"] || ""} />
                                                <span className="validation-error" style={{color:"red"}}>{this.state.errors["lastname"]}</span>
                                            </InputGroup>

                                            <InputGroup className="mb-3 row" style={{marginLeft:"0px"}} >
                                                <div className="label">Contact Number*</div>
                                                <div className="col-sm-4" style={{padding:"0px"}}>
                                                    <InputGroupAddon addonType="prepend" className="add-btn-radius rp">
                                                        <InputGroupText>
                                                            <i className="fa fa-plus"></i>
                                                        </InputGroupText>
                                                        <select className="custom-select" id="countryShortCode" name="countryShortCode">
                                                            <option defaultValue>Select Code</option>
                                                            <option value ="IND">IND</option>
                                                            <option value ="US">US</option>
                                                            <option value ="UK">UK</option>
                                                        </select>
                                                    </InputGroupAddon>
                                                </div>
                                                <div className="col-sm-8 phone-inp" style={{padding:"0px", paddingLeft:"15px"}}>
                                                    <InputGroupAddon addonType="prepend" className="add-btn-radius">
                                                        <InputGroupText>
                                                            <i className="icon-phone"></i>
                                                        </InputGroupText>
                                                        <Input type="text" autoComplete="phone" className="custom-select"
                                                            ref="phone" onChange={this.handleInput.bind(this, "phone")}
                                                            value={this.state.fields["phone"] || ""} />
                                                        <span className="validation-error" style={{color:"red"}}>{this.state.errors["phone"]}</span>
                                                    </InputGroupAddon>
                                                </div>
                                            </InputGroup>

                                            <InputGroup className="mb-3">
                                                <div className="label">IM Contact Type*</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-envelope"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <select className="custom-select" name="imContactType" id="imContactType" >
                                                    <option defaultValue>Please select Contact type</option>
                                                    <option value="skype">Skype</option>
                                                    <option value="whatsapp">Whatsapp</option>
                                                    <option value="googletalk">Google Talk</option>
                                                </select>
                                            </InputGroup>

                                            <InputGroup className="mb-3">
                                                <div className="label">IM User ID*</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>@</InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" autoComplete="userId"
                                                    ref="userId" onChange={this.handleInput.bind(this, "userId")} maxLength={40}
                                                    value={this.state.fields["userId"] || ""} />
                                                <span className="validation-error" style={{color:"red"}}>{this.state.errors["userId"]}</span>
                                                <span className="validation-error1" style={{color:"red"}}>{this.state.errors["userId1"]}</span>
                                            </InputGroup>

                                            <div className="footerr">
                                                <Row className="footer-btn-row">
                                                    <Col xs="12" sm="4" className="order-bot">
                                                        <Button onClick={() => this.props.steps(1)} block outline color="info"><span>Back</span></Button>
                                                    </Col>
                                                    <Col xs="12" sm="4"></Col>
                                                    <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0 order-top">
                                                        <Button id="submit" value="Submit" className="act-btn btn btn-info mb-1" block><span>Save</span></Button>
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

export default SecondSteps;
