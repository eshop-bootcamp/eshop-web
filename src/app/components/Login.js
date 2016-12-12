import React, {Component} from 'react';
import loginStyle from './login.css';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import Subheader from 'material-ui/Subheader';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            finished: false,
            stepIndex: 0,
        };

    }

    render(){    
        return (
            <div className={loginStyle.main}>
                <Paper className={loginStyle.login} zDepth={5}>
                    
                    <Subheader inset={true}>Login</Subheader>
                    <div className={loginStyle.loginForm}>
                        <div className={loginStyle.loginFormField}>
                            <TextField
                                floatingLabelText="Username"
                            />
                        </div>
                        <div className={loginStyle.loginFormField}>
                            <TextField
                            floatingLabelText="Password"
                            />
                        </div>
                        <RaisedButton label="Login" secondary={true} />

                    </div>
                </Paper>
                <Paper className={loginStyle.register} zDepth={5}>
                    <Subheader>Register</Subheader>

                    <Stepper activeStep={this.state.stepIndex}>
                        <Step>
                            <StepLabel>Enter Profile Info</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Seller/Buyer</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Finish</StepLabel>
                        </Step>
                        </Stepper>
                </Paper>
            </div>
        )
    }
}

export default Login;