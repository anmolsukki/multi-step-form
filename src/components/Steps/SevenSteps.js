import React from "react";
import { Card, CardHeader, Col, Button, Row, Table, CardBody } from 'reactstrap';
import { styles } from "../../container/Constants";
import "../../assets/CompStyle.css";

class SevenSteps extends React.Component {

    render () {
        return (
            <Row>
                <Col sm={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3 }} xs={{size: 6, offset: 3}}>
                    <div>
                        <center><h3 style={styles.heading}>Download Contract</h3></center>
                        <ul style={styles.decimalList}>
                            <li style={styles.sapaceStyleLi}>Download consulting agreement.</li>
                            <li style={styles.sapaceStyleLi}>
                                Initial the bottom right corner of every page except the signatory page (page 4) of the consulting agreement.
                            </li>
                            <li style={styles.sapaceStyleLi}>
                                Upload the signed agreement and scanned copy of a government issued photo ID on the next page
                            </li>
                        </ul>
                        
                        <ul style={styles.removeLiDisc}>
                            <li style={styles.sapaceStyleLi}>
                                Please download your contract from the table below. Once you have executed the contract per the instructions above (see sample executed contract if needed), you will be able to upload it on the next page.
                            </li>
                            <li style={styles.sapaceStyleLi}>
                                Please download the following NDA files, in the next step these have signed and sent back
                            </li>
                        </ul><br />
                        <Row>
                            <Col xs="12" lg="12" sm="12">
                                <Card>
                                    <CardHeader>
                                        <h4>Downloads</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>File</th>
                                                    <th style={styles.textRight}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>file1.pdf</td>
                                                    <td style={styles.textRight}>
                                                        <a href="https://d1.awsstatic.com/training-and-certification/docs/AWS_Certified_Solutions_Architect_Associate_Sample_Questions.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>file2.pdf</td>
                                                    <td style={styles.textRight}>
                                                        <a href="https://d1.awsstatic.com/training-and-certification/docs/AWS_Certified_Solutions_Architect_Associate_Sample_Questions.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <div className="footerr" >
                    <center>
                        <Col xs="12" sm={{ size: 8 }}>
                            <Row>
                                <Col sm="4">
                                    <Button style={{float: "left"}} className="mb-3" onClick={ () => this.props.steps(6) } block outline color="info"><span>Back</span></Button>
                                </Col>
                                <Col sm={{ size: 4, offset: 4 }} >
                                    <Button style={{float: "right"}} onClick={() => this.props.steps(8) } block outline active color="info" aria-pressed="true" >Next</Button> 
                                </Col>
                            </Row>
                        </Col>
                    </center>
                </div>
            </Row>
        )
    }
}

export default SevenSteps;
