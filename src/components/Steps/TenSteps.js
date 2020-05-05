import React, { Component, createRef } from "react";
import { Card, CardBody, Col, Button, Table, Row, NavLink } from 'reactstrap';
import Dropzone from 'react-dropzone'
import "../../assets/CompStyle.css";

const dropzoneRef = createRef()
const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

class TenSteps extends Component {
    constructor (props) {
        super (props)
        this.state = {
            files: [],
            encode: [],
            isLoading:false
        }
    }

    encodeFile = (event) => {
        const {encode} = this.state;
        let file = null;
        let selectedFile = event;
        let fileName = "";
        if (selectedFile.length > 0) {
            let fileToLoad = selectedFile[0];
            fileName = fileToLoad.name;
            let fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
                file = fileLoadedEvent.target.result;
                encode.push({filebody: file ,fileName: fileName})
            };
            fileReader.readAsDataURL(fileToLoad);
        }
        this.setState({
            fileBody: file,
            fileName: fileName,
            encode
        })
    }
    
    onUploadFile = () => {
        setTimeout(() => {
            this.setState({ isLoading: false });
          }, 3000);
        this.setState({
            isLoading:true
        })
    }
    
    fileChangedHandler = (event, type) => {
        const { files } = this.state
        const dropFiles = ( type === 'drop' ? event : event.target.files );
        
        for (let i = 0; i < dropFiles.length; i++) {
            if (dropFiles[i]) {
                files.push(dropFiles[i])
                this.encodeFile(dropFiles)
            }
        }
        this.setState({
            files
        })
    };
    
    onDeleteFile = (i) => {
        let files = [
            ...this.state.files.slice(0, i),
            ...this.state.files.slice(i + 1)
        ];
        this.setState({
            files
        })
    };

    render () {
        const { files, isLoading } = this.state
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col lg="12" xs="12" sm="12" md="12">
                        {isLoading ? loading() : '' }
                        <Card>
                            <Row>
                                <CardBody className="align-items-center" >
                                    <h2 className="text-center">Upload Files</h2>
                                </CardBody>
                            </Row>
                            <Row className="justify-content-center">
                                <Col lg="6" xs="12" sm="6" md="6">
                                    <Row className="justify-content-center">
                                        <Card>
                                            <Dropzone onDrop={ (e) => this.fileChangedHandler(e, "drop") } ref={dropzoneRef}>
                                                {({getRootProps, getInputProps}) => (
                                                    <div {...getRootProps()}>
                                                        <input {...getInputProps()} onChange={(e) => this.fileChangedHandler(e)}  />
                                                        <p className="text-center p-2">Drag and drop file here or click to upload</p>
                                                        <p className="text-center"><i className="fa fa-upload fa-3x mt-6"></i></p>
                                                    </div>
                                                )}
                                            </Dropzone>
                                        </Card>
                                    </Row>
                                    <Row style={{marginLeft: "100px", marginRight:"100px"}}>
                                        <Table responsive bordered style={{marginTop: "20px"}}>
                                            <thead>
                                                <tr>
                                                    <th>File</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { files && files.map((f, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td>{f.name}</td>
                                                            <td>
                                                                <NavLink className="p-0" href="#" onClick={() => this.onDeleteFile (index)}>Delete</NavLink>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col col="2" sm="6" md="4" xl className="mb-3 mb-xl-0 text-center p-4">
                                            <Button color="primary" onClick={this.onUploadFile}>{isLoading ? 'Wait...' : 'Upload Files'}</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <div>
                    <Row className="footerr approval">
                        <Col xs="12" sm="4" className="order-bot">
                            <Button onClick={ ()=> this.props.steps(9) } className="btn-block back" block outline color="info"><span>Back</span></Button>
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

export default TenSteps;
