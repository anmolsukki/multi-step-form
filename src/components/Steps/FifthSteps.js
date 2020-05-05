import React from "react";
import { Button, Card, CardHeader, Col, Form, Input, InputGroup, Row , Table } from 'reactstrap';
import { timeSlots } from "../../container/Constants";
import 'font-awesome/css/font-awesome.min.css';
import "../../assets/CompStyle.css";

class FifthSteps extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            baseRate: '',
            selectValue: '',
            tableData : [],
            availability: '',
            fromAvailability: '',
            toAvailability: '',
            tableDataAvailability : [],
            showError: false,
            disabledRate: true,
            disabledAdd: true,
            disabledAvailibility: true,
            disabledFrom : true,
            disabledTo : true,
            dropDownMessage: null,
        }
    }

    updateRateInput(key1, value) {
        this.setState({ [key1]: value, disabledAdd : false });
    }
      
    async submitForm(e) {
        e.preventDefault();
        const row = { select : this.state.selectValue, baseRate : this.state.baseRate };
    
        var found = false;
        const { tableData } = this.state;
        for(var i = 0; i < tableData.length; i++) {
            /*eslint-disable eqeqeq*/
            if (tableData[i].select == this.state.selectValue) {
                found = true;
                break;
            }
        }
        if(found) {
            this.setState({
                dropDownMessage: "Selected skill already exist"
            })
        }
        else {
            await this.setState({
                tableData : [...this.state.tableData, row],
                disabledAdd : true,
                disabledRate: true
            })
        }
    }
      
    handleDropdownChange(e) {
        this.setState({ selectValue : e.target.value, disabledRate: false });
        if(this.state.dropDownMessage)
        this.setState({ dropDownMessage: null });
    }
      
    async deleteRateItem(id) {
        let tableData = [...this.state.tableData];
        tableData.splice(id, 1);
        await this.setState({ tableData });
    }
      
    async submitFormAvailibility(e) {
        e.preventDefault();
        const row = { availability : this.state.availability, fromAvailability : this.state.fromAvailability, toAvailability : this.state.toAvailability };
        await this.setState({
          tableDataAvailability : [...this.state.tableDataAvailability, row],
          disabledAvailibility: true,
          disabledFrom: true,
          disabledTo: true
        })
    }
      
    handleDropdownAvailability(e) {
        this.setState({ availability : e.target.value, disabledAvailibility: false });
    }
    
    modify_time = (start_time, end_time) => {
        start_time = start_time.split(" ");
        var time = start_time[0].split(":");
        var stime = time[0];
        if(start_time[1] == "PM" && stime<12)
        stime = parseInt(stime) + 12;
      
        end_time = end_time.split(" ");
        var time1 = end_time[0].split(":");
        var etime = time1[0];
        if(end_time[1] == "PM" && etime < 12)
        etime = parseInt(etime) + 12;
        switch (true) {
            case (parseInt(stime) == parseInt(etime)):
                if(time1[1] < time[1]) {
                    alert("Start time should be greater then end check")
                }
                this.setState({ disabledTo: true});
                return false;
            case (parseInt(etime) < parseInt(stime)):
                alert("Start time should be greater then end")
                this.setState({
                    disabledTo: true
                });
                return false;
            default:
                return true;
        }
    }
      
    handleDropdownFrom(e) {
    
        // also this is For not allowe to select date from less than to
        const { toAvailability } = this.state;
        let update =  true;
        if(toAvailability !== "") {
            update = this.modify_time( e.target.value, toAvailability)
        }
        if(update)
        this.setState({ fromAvailability : e.target.value, disabledFrom: false });
      }
      
    handleDropdownTo(e) {

        //also this is For not allowe to select date from less than to
        const { fromAvailability } = this.state;
        let update = this.modify_time(fromAvailability,  e.target.value)
        if(update)
        this.setState({ toAvailability : e.target.value, disabledTo: false });
    }
      
    async deleteAvailability(id) {
        let tableDataAvailability = [...this.state.tableDataAvailability];
        tableDataAvailability.splice(id, 1);
        await this.setState({ tableDataAvailability });
    }
      
    submitTableData = () => {
        this.setState((prevState) => {
            return { showError: !prevState.showError }
        })
      };

    render () {
        return (
            <div style={{margin: "20px"}}>
                <Row>
                    <Col>
                        { this.state.tableData.length === 0 || this.state.tableDataAvailability.length === 0 ?
                            this.state.showError && <div className="error-message">Before you continue, please log your hourly rates for your skills as well as your availability</div> : null
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="6">
                        <h1>Skill Hourly Rates</h1>
                        <Form onSubmit={this.submitForm.bind(this)}>
                            <Row>
                                <Col xs="12" sm="12" md="6" className="r-padding">
                                    <p className="lable">Add Skill</p>

                                    <InputGroup className="mb-3">
                                        <select className="custom-select" id="dropdown" onChange={ (event) => this.handleDropdownChange(event, this) }>
                                            <option>Please Select</option>
                                            <option value="Java">Java</option>
                                            <option value="NodeJs">NodeJs</option>
                                            <option value="HTML">HTML</option>
                                            <option value="PHP">PHP</option>
                                        </select>
                                        <span className="validation-error" style={{color:"red"}}>{this.state.dropDownMessage}</span>
                                    </InputGroup>
                                </Col>

                                <Col xs="12" sm="12" md="3" lg="3" className="r-padding">
                                    <InputGroup className="mb-6">
                                        <p className="lable">Base Hourly Rate(USD)</p>
                                        <Input type="text" placeholder ="$20" className="custom-select" disabled={this.state.disabledRate}
                                            value={this.state.baseRate} onChange={event => this.updateRateInput("baseRate", event.target.value)} />
                                    </InputGroup>
                                </Col>

                                <Col xs="12" sm="3" md="2" style={{marginRight: "7px"}}>
                                    <Button value="Submit" block outline active color="info" aria-pressed="true" className="addButton" disabled={this.state.disabledAdd}>Add</Button>
                                </Col>
                            </Row>
                        </Form>

                        <Card>
                            <h4 className="card-table-heading">Skill Hourly Rates</h4>
                            <CardHeader>
                                { this.state.tableData.length === 0 ?
                                    <div>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Skill</th>
                                                    <th>Base Hourly Rate(USD)</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                        </Table>
                                        <span>Please add your first skill above</span>
                                    </div> :
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Skill</th>
                                                <th>Base Hourly Rate(USD)</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.select}</td>
                                                        <td>${item.baseRate}</td>
                                                        <td><Button className="btn btn-danger" onClick={() => this.deleteRateItem(index)}>Delete</Button></td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                }
                            </CardHeader>
                        </Card>
                    </Col>

                    <Col xs="12" sm="12" md="6">
                        <h1>Availability</h1>
                        <Form onSubmit={this.submitFormAvailibility.bind(this)}>
                            <Row>
                                <Col xs="12" sm="12" md="3" className="r-padding">
                                    <p className="lable">Add Availability</p>
                                    <InputGroup className="mb-3">
                                        <select className="custom-select" onChange={ (event) => this.handleDropdownAvailability(event, this) }>
                                            <option>Day</option>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>
                                        </select>
                                    </InputGroup>
                                </Col>

                                <Col xs="12" sm="12" md="3" className="r-padding">
                                    <p className="lable">From</p>
                                    <InputGroup className="mb-3">
                                        <select className="custom-select" disabled={this.state.disabledAvailibility} onChange={ (event) => this.handleDropdownFrom(event, this) }>
                                            <option>Start Time</option>
                                            { timeSlots.map((time, index)=><option key={index} value={time}>{time}</option>)}
                                        </select>
                                    </InputGroup>
                                </Col>

                                <Col xs="12" sm="12" md="3" className="r-padding">
                                    <p className="lable" >From</p>
                                    <InputGroup className="mb-3">
                                        <select className="custom-select" disabled={this.state.disabledFrom} onChange={ (event) => this.handleDropdownTo(event, this) }>
                                            <option>End Time</option>
                                            { timeSlots.map((time, index)=><option key={index} value={time}>{time}</option>)}
                                        </select>
                                    </InputGroup>
                                </Col>

                                <Col col="6" sm="4" md="2" style={{marginRight: "7px"}}>
                                    <Button value="submit" block outline active color="info" aria-pressed="true" className="addButton" disabled={this.state.disabledTo}>Add</Button>
                                </Col>
                            </Row>
                        </Form>

                        <Card>
                            <h4 className="card-table-heading">Available Working Hours in Local Time</h4>
                                <CardHeader>
                                    { this.state.tableDataAvailability.length === 0 ?
                                        <div>
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Day</th>
                                                        <th>Start Time</th>
                                                        <th>End Time</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                            </Table>
                                            <span>Please add your availability above</span>
                                        </div> :
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Day</th>
                                                    <th>Start Time</th>
                                                    <th>End Time</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                { this.state.tableDataAvailability.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{item.availability}</td>
                                                            <td>{item.fromAvailability}</td>
                                                            <td>{item.toAvailability}</td>
                                                            <td><Button className="btn btn-danger" onClick={() => this.deleteAvailability(index)}>Delete</Button></td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </Table>
                                    }
                                </CardHeader>
                            </Card>
                    </Col>
                </Row>

                <div className="footerr">
                    <Row className="footer-btn-row">
                        <Col xs="12" sm="4" className="order-bot">
                            <Button onClick={() => this.props.steps(4)} block outline color="info"><span>Back</span></Button>
                        </Col>
                        <Col xs="12" sm="4"></Col>
                        <Col xs="12" sm="4" className="mb-3 order-top">
                        { this.state.tableData.length === 0 || this.state.tableDataAvailability.length === 0 ?
                            <Button onClick={this.submitTableData} block outline active color="info" aria-pressed="true" className="act-btn mb-1">Save</Button> :
                            <Button onClick={() => this.props.steps(6)} block outline active color="info" aria-pressed="true" className="act-btn mb-1">Save</Button>
                        }
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default FifthSteps;
