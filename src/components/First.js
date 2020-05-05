import React from "react";
import { CardBody, CardHeader, Progress } from 'reactstrap';
import FirstSteps from "./Steps/FirstSteps";
import SecondSteps from "./Steps/SecondSteps";
import ThirdSteps from "./Steps/ThirdSteps";
import FourtSteps from "./Steps/FourthSteps";
import FifthSteps from "./Steps/FifthSteps";
import SixSteps from "./Steps/SixSteps";
import SevenSteps from "./Steps/SevenSteps";
import EightSteps from "./Steps/EightSteps";
import NineSteps from "./Steps/NineSteps";
import TenSteps from "./Steps/TenSteps";
import ConfirmSteps from "./Steps/confirmSteps";
import MarkdownSteps from "./Steps/MarkdownSteps";

class First extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            onStep : 1,
            stepTwo : {
                stepTwoInputField: {}
            },
            stepThree : {
                stepThreeInputField: {},
                stepThreeCountry: "",
                stepThreeRegion: ""
            }
        }
    }

    nextStep = (step) => {
        switch (step) {
            case "step1" :
            this.setState ({onStep: 2})
            break;
            default :
        }
    }

    goToStep = (step) => {
        if(step) {
            this.setState({
                onStep: step,
            }) 
        }   
    }

    previousStep = (step) => {
        switch (step) {
            case "step1" :
            this.setState ({onStep: 9})
            break;
            default :
        }
      }

    render () {
        const { stepTwo, stepThree } = this.state
        const finalValue = { stepTwo, stepThree }
        return (
            <div>
                <div>
                    <CardHeader>
                        <div style={{textAlign: "center"}}>
                            <h1>A</h1>
                        </div>
                    </CardHeader>
                    <CardBody>
                        {
                            this.state.onStep === 1 ? <Progress value={10} className="mb-3">1/10</Progress> :
                            this.state.onStep === 2 ? <Progress value={20} className="mb-3">2/10</Progress> :
                            this.state.onStep === 3 ? <Progress value={30} className="mb-3">3/10</Progress> :
                            this.state.onStep === 4 ? <Progress value={40} className="mb-3">4/10</Progress> :
                            this.state.onStep === 5 ? <Progress value={50} className="mb-3">5/10</Progress> :
                            this.state.onStep === 6 ? <Progress value={60} className="mb-3">6/10</Progress> :
                            this.state.onStep === 7 ? <Progress value={70} className="mb-3">7/10</Progress> :
                            this.state.onStep === 8 ? <Progress value={80} className="mb-3">8/10</Progress> :
                            this.state.onStep === 9 ? <Progress value={90} className="mb-3">9/10</Progress> :
                            this.state.onStep === 10 ? <Progress value={100} className="mb-3">10/10</Progress> : null
                        }
                    </CardBody>
                </div>
                    {
                    this.state.onStep === 1 ? <FirstSteps step = {this.nextStep} /> :
                    this.state.onStep === 2 ? <SecondSteps steps = {this.goToStep} stepTwoInputValue={finalValue.stepTwo.stepTwoInputField} /> :
                    this.state.onStep === 3 ? <ThirdSteps steps = {this.goToStep} stepThreeInputValue ={finalValue.stepThree.stepThreeInputField} stepThreeCountryValue={finalValue.stepThree.stepThreeCountry} stepThreeRegionValue={finalValue.stepThree.stepThreeRegion} /> :
                    this.state.onStep === 4 ? <FourtSteps steps = {this.goToStep} /> :
                    this.state.onStep === 5 ? <FifthSteps steps = {this.goToStep} /> :
                    this.state.onStep === 6 ? <SixSteps steps = {this.goToStep} /> :
                    this.state.onStep === 7 ? <SevenSteps steps = {this.goToStep} /> :
                    this.state.onStep === 8 ? <EightSteps steps = {this.goToStep} /> :
                    this.state.onStep === 9 ? <NineSteps steps = {this.goToStep} /> :
                    this.state.onStep === 10 ? <TenSteps steps = {this.goToStep} /> :
                    this.state.onStep === 11 ? <ConfirmSteps backStep = {this.previousStep} steps = {this.goToStep} finalValue={finalValue} /> :
                    this.state.onStep === 12 ? <MarkdownSteps /> : null
                    }               
            </div>
        )
    }
}

export default First;
