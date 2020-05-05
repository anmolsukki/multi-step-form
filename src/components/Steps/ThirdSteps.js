import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import "../../assets/CompStyle.css";

class ThirdSteps extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            fields: this.props.stepThreeInputValue,
            errors: {},
            country: this.props.stepThreeCountryValue,
            region: this.props.stepThreeRegionValue,
        }
    }

    basicValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        if(!fields["city"]){
            formIsValid = false;
            errors["city"] = "City name cannot be empty";
        }
    
        if(!fields["zip"]){
            formIsValid = false;
            errors["zip"] = "Zip Code cannot be empty";
        }
        if(typeof fields["zip"] !== "undefined"){
            if(!fields["zip"].match(/^\d{6}(?:[-\s]\d{4})?$/)){
                formIsValid = false;
                errors["zip"] = "Zipcode should contain 6 numbers";
            }
        }
    
        if(!fields["address1"]){
            formIsValid = false;
            errors["address1"] = "Address Line 1 cannot be empty";
        }
    
        this.setState({errors: errors});
        return formIsValid;
    }
    
    basicSubmit = (e) => {
        e.preventDefault();
        if(this.basicValidation()){
            this.setState({
                steps: this.props.steps(4)
            })
        }
        else {
            alert("Form has errors.")
        }
    }
    
    handleInput = (field, e) => {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({fields});
    }
    
    selectCountry (val) {
        this.setState({ country: val });
    }
    
    
    selectRegion (val) {
        this.setState({ region: val });
    }

    render () {
        const { country, region } = this.state;
        return(
            <div className="animated fadeIn">
                <div className="app flex-row ">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="12" lg="10" xl="6">
                                <Card className="mx-4 general-info">
                                    <CardBody className="p-4">

                                        <Form onSubmit= {this.basicSubmit.bind(this)} >
                                            <h1 className="form-heading">Basic Information</h1>

                                            <FormGroup>
                                                <div className="label">Country*</div>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-globe d-block"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <CountryDropdown className="browser-default custom-select"
                                                        value={country} onChange={(val) => this.selectCountry(val)} />
                                                </InputGroup>
                                            </FormGroup>

                                            <FormGroup>
                                                <div className="label">State*</div>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-location-pin d-block"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <RegionDropdown className="browser-default custom-select"
                                                        country={country} value={region} onChange={(val) => this.selectRegion(val)} />
                                                </InputGroup>
                                            </FormGroup>

                                            <InputGroup className="mb-3">
                                                <div className="label">City*</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="fa fa-hospital-o"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" ref="city" onChange={this.handleInput.bind(this, "city")}
                                                    value={this.state.fields["city"] || ""} maxLength={30} />
                                                <span className="validation-error" style={{color:"red"}}>{this.state.errors["city"]}</span>
                                            </InputGroup>

                                            <InputGroup className="mb-3">
                                                <div className="label">Zip Code*</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>#</InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" ref="zip" onChange={this.handleInput.bind(this, "zip")}
                                                    value={this.state.fields["zip"] || ""} maxLength={15} />
                                                <span className="validation-error" style={{color:"red"}}>{this.state.errors["zip"]}</span>
                                            </InputGroup>

                                            <InputGroup className="mb-3">
                                            <div className="label">Address Line1*</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-home d-block"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" autoComplete="address1" ref="address1"
                                                    onChange={this.handleInput.bind(this, "address1")} value={this.state.fields["address1"] || ""} maxLength={50} />
                                                <span className="validation-error" style={{color:"red"}}>{this.state.errors["address1"]}</span>
                                            </InputGroup>

                                            <InputGroup className="mb-3">
                                                <div className="label">Address Line2</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-home d-block"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" autoComplete="address2" ref="address2"
                                                    onChange={this.handleInput.bind(this, "address2")} value={this.state.fields["address2"] || ""} maxLength={50} />
                                            </InputGroup>

                                            <InputGroup className="mb-3">
                                                <div className="label">Time Zone*</div>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-home d-block"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <select className="browser-default custom-select" name="timezone" id="timezone" >
                                                    <option>Select TimeZone...</option>
                                                    <option>+5:30 GMT</option>
                                                    <option>+6:30 GMT</option>
                                                </select>
                                            </InputGroup>

                                            <div className="footerr">
                                                <Row className="footer-btn-row">
                                                    <Col xs="12" sm="4" className="order-bot">
                                                        <Button onClick={() => this.props.steps(2)} block outline color="info"><span>Back</span></Button>
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

export default ThirdSteps;
