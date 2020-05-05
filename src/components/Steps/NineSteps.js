import React from "react";
import { Card, Col, Button, Row, CardHeader } from 'reactstrap';
import { styles } from "../../container/Constants";
import FileBase64 from 'react-file-base64';
import "../../assets/CompStyle.css";

class NineSteps extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            files: [],
            filesPhoto: [],
            fileMessage: null,
            fileMessagePhoto: null,
            choseFileDisable: true,
            chosePhotoDisable: true,
            fileTypeMessage: null,
            filesPhotoTypeMessage: null,
            fileType: "",
            disableSubmitButton: true
        }
    }

    getFiles(files) {
        if(files.file.size > 1e+7){
          this.setState({
            fileMessage: "File size should not be greater than 10 MB",
            fileTypeMessage: null,
            choseFileDisable: true
          })
        }
        else {
          var allowedExtensions = /(jpg|jpeg|png|pdf)$/i.test(files.type)
          if (!allowedExtensions) {
            this.setState({
              fileTypeMessage: "File type should be only .pdf .jpg .jpeg .png",
              fileMessage: null,
              choseFileDisable: true
            })
          }
          else {
            this.setState({ 
              files: files,
              fileMessage: null,
              fileTypeMessage: null,
              choseFileDisable: false
            });
          }
        }
      }
    
      getFilesPhoto(filesPhoto) {
        if(filesPhoto.file.size > 1e+7){
          this.setState({
            fileMessagePhoto: "File size should not be greater than 10 MB",
            filesPhotoTypeMessage: null,
            chosePhotoDisable: true
          })
        }
        else {
          var extensions = /(jpg|jpeg|png|pdf)$/i.test(filesPhoto.type)
          if(!extensions) {
            this.setState({
              filesPhotoTypeMessage: "File type should be only .pdf .jpg .jpeg .png",
              fileMessagePhoto: null,
              chosePhotoDisable: true
            })
          }
          else {
            this.setState({ 
              filesPhoto: filesPhoto,
              fileMessagePhoto: null,
              filesPhotoTypeMessage: null,
              chosePhotoDisable: false
            });
          }
        }
      }

    submitFile = () => {
        this.setState({
            disableSubmitButton: false
        })
    }

    render () {
        return (
            <div>
              <Row>
                <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                    <div>
                        <center><h3 style={styles.heading}>FileBase64 Upload Files</h3></center>
                            <ul style={styles.decimalList}>
                                <li style={styles.sapaceStyleLi}>Signed and initialed copy of the Consulting Agreement.</li>
                                <li style={styles.sapaceStyleLi}>
                                    Government issued document with photo ID.
                                </li>
                            </ul>
                        <br />
                        <Row>
                            <Col xs="12" lg="12" sm="12">
                                <Card>
                                    <CardHeader>
                                        <div className="footerr">
                                            <Row className="footer-btn-row">
                                                <Col className="order-bot">
                                                    <FileBase64
                                                      multiple={ false }
                                                      onDone={ this.getFiles.bind(this) } />
                                                    <span className="validation-error-chose" style={{color:"red"}}>{this.state.fileMessage}</span>
                                                    <span className="validation-error-chose" style={{color:"red"}}>{this.state.fileTypeMessage}</span><br/><br/>

                                                    <FileBase64
                                                      multiple={ false }
                                                      onDone={ this.getFilesPhoto.bind(this) } />
                                                    <span className="validation-error-chose1" style={{color:"red"}}>{this.state.fileMessagePhoto}</span>
                                                    <span className="validation-error-chose1" style={{color:"red"}}>{this.state.filesPhotoTypeMessage}</span><br/><br/>

                                                    { this.state.choseFileDisable === true || this.state.chosePhotoDisable === true ?
                                                    // <Button value="Submit" disabled= {this.state.choseFileDisable || this.state.chosePhotoDisable} style={{float: "left"}} block outline active color="info" aria-pressed="true" >Upload Files</Button> :
                                                    // <Button value="Submit" style={{float: "left"}} block outline active color="info" aria-pressed="true" >Upload Files</Button>

                                                    <Button  disabled= {this.state.choseFileDisable || this.state.chosePhotoDisable} style={{float: "left"}} block outline active color="info" aria-pressed="true" >Upload Files</Button> :
                                                    <Button onClick={() => this.submitFile(this)} style={{float: "left"}} block outline active color="info" aria-pressed="true" >Upload Files</Button>
                                                    }
                                                </Col>
                                            </Row>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <div className="footerr">
                    <Row className="footer-btn-row row-margin1">
                        <Col xs="12" sm="4" className="order-bot">
                            <Button onClick={ ()=> this.props.steps(8)} className="btn-block back" block outline color="info"><span>Back</span></Button>
                        </Col>
                        <Col xs="12" sm="4"></Col>
                        <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0 order-top">
                            <Button onClick={ ()=> this.props.steps(10)} disabled={this.state.disableSubmitButton} className="act-btn btn-block approval btn-info mb-1" block><span>Submit for Approval</span></Button>
                        </Col>
                    </Row>
                </div>
              </Row>
            </div>
        )
    }
}

export default NineSteps;
