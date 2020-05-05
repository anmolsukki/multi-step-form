import React from "react";
import { Card, CardHeader, Col, Button, Row } from 'reactstrap';
import { styles } from "../../container/Constants";
import "../../assets/CompStyle.css";

class EightSteps extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            choseFileDisable: true,
            chosePhotoDisable: true,
            fileMessage: null,
            photoMessage: null,
            choseFilnalDisable: true,
            fileSubmitMessage: null,
            isLoading: false
        }
    }

    handleDocumentChange = (files) => {
        const inputFile = files[0];
        if(inputFile.size > 1e+7) {
            this.setState({
                choseFileDisable: true,
                fileMessage: "File size should not be greater than 10 MB",
            })
        }
        else {
            this.setState ({
                choseFileDisable: false,
                fileMessage: null
            })
        }
    }

    handlePhotoChange = (files) => {
        const inputFile = files[0];
        if(inputFile.size > 1e+7){
            this.setState({
                chosePhotoDisable: true,
                photoMessage: "File size should not be greater than 10 MB"
            })
        }
        else {
            this.setState ({
                chosePhotoDisable: false,
                photoMessage: null
            })
        }
    } 

    toggleSubmit = () => {
        setTimeout(() => {
            this.setState({ isLoading: false, fileSubmitMessage: "File Succesfully Uploaded" });
          }, 3000);
        this.setState({
            choseFilnalDisable: false,
            isLoading: true
        })
    }

    render () {
        const { isLoading } = this.state;
        return (
            <Row>
                <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                    <div>
                        <center><h3 style={styles.heading}>Upload Files</h3></center>
                        <ul style={styles.decimalList}>
                            <li style={styles.sapaceStyleLi}>Signed and initialed copy of the Consulting Agreement.</li>
                            <li style={styles.sapaceStyleLi}>Government issued document with photo ID.</li>
                        </ul>
                        <br />
                        <Row>
                            <Col xs="12" lg="12" sm="12">
                                <Card>
                                    <CardHeader>
                                        <div className="footerr">
                                            <Row className="footer-btn-row">
                                                <Col className="order-bot">
                                                    <div style={{paddingBottom: "20px"}}>
                                                        <p style={{fontWeight: "bold"}}>Signed and initialed copy of the Consulting Agreement.</p>
                                                        <input type="file" onChange={ (e) => this.handleDocumentChange(e.target.files) } name = "agrement" accept = "application/pdf, image/jpg, image/jpeg, image/x-png" />
                                                        <span className="validation-error-chose" style={{color:"red"}}>{this.state.fileMessage}</span>
                                                    </div>
                                                    <div>
                                                        <p style={{fontWeight: "bold"}}>Government issued document with photo ID.</p>
                                                        <input type="file" onChange={ (e) => this.handlePhotoChange(e.target.files) } name = "photo" accept = "application/pdf, image/jpg, image/jpeg, image/x-png" />
                                                        <span className="validation-error-chose1" style={{color:"red"}}>{this.state.photoMessage}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        { this.state.choseFileDisable === true || this.state.chosePhotoDisable === true ?
                                            <Button disabled= {this.state.choseFileDisable || this.state.chosePhotoDisable} style={{float: "left"}} className="btn-block upload" block outline active color="info" aria-pressed="true" >Upload Files</Button> :
                                            <Button onClick={() => this.toggleSubmit()} style={{float: "left"}} className="btn-block upload" block outline active color="info" aria-pressed="true" >{isLoading ? 'Wait...' : 'Upload Files'}</Button>
                                        }
                                    </CardHeader>
                                    { this.state.fileSubmitMessage &&
                                        <span className="file-message">{this.state.fileSubmitMessage}</span>
                                    }
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <div className="footerr approval">
                    <Row className="footer-btn-row row-margin1">
                        <Col xs="12" sm="4" className="order-bot">
                            <Button onClick={ ()=> this.props.steps(7) } className="btn-block back" block outline color="info"><span>Back</span></Button>
                        </Col>
                        <Col xs="12" sm="4"></Col>
                        <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0 order-top">
                            { this.state.choseFilnalDisable === true ?
                                <Button onClick={ ()=> this.props.steps(9) } disabled= {this.state.choseFilnalDisable} className="act-btn btn-block approval btn-info mb-1" block><span>Save</span></Button> :
                                <Button onClick={ ()=> this.props.steps(9) } className="act-btn btn-block approval btn-info mb-1" block><span>Save</span></Button>
                            }
                        </Col>
                    </Row>
                </div>
            </Row>
        )
    }
}

export default EightSteps;
