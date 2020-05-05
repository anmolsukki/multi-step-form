import React from "react";
import { Col, Button, Row } from 'reactstrap';
import { styles } from "../../container/Constants";
import "../../assets/CompStyle.css";

class MarkdownSteps extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            contractBtnDisabled : true
        }
    }

    render () {
        return (
            <Row className="apps">
                <Col sm={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3 }} xs={{size: 6, offset: 3}}>
                    <div>
                        <center><h3 style={styles.heading}>Thanks for your submission!</h3></center>
                        <center><p style={styles.heading}>Your documents are under review.</p></center>
                        <center><p className= "line">Your account is pending verification of uploaded documentation.</p></center>
                        <center><p className= "line">Once your uploaded documents have been verified, you will be <br/> modified and will be able to engage with Archimydes.</p></center>
                        <center><Button disabled={this.state.contractBtnDisabled} className="act-btn btn-block marketplace btn-info" block><center><span>Contract  Marketplace</span></center></Button></center>
                        <br />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default MarkdownSteps;
