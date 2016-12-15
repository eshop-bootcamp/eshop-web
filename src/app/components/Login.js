import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import loginStyle from './login.css';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import HttpUtil from '../HttpUtil';
import Auth from '../Auth';
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
            finished: false
        };
    }
    onSubmit(){
        let username = ReactDOM.findDOMNode(this.refs.username).querySelector('input').value;
        let password = ReactDOM.findDOMNode(this.refs.password).querySelector('input').value;
        HttpUtil.POST('/login',{
            username,
            password
        }).then((data) => { 
            if(data.userDetails){
                Auth.authenticate(data.token, data.userDetails);
                this.props.router.push('/landingpagebuyer');
            }
            else{
                //redirect to seller landing page
            }
        });
    }
    render(){    
        return (
            <div className={loginStyle.main}>                    
                    <Subheader inset={true}>Login</Subheader>
                    <div className={loginStyle.loginForm}>
                        <div className={loginStyle.loginFormField}>
                            <TextField id="username"
                                autoFocus
                                ref="username"
                                floatingLabelText="Username"
                            />
                        </div>
                        <div className={loginStyle.loginFormField}>
                            <TextField 
                            id="password"
                            type="password"
                            ref="password"
                            floatingLabelText="Password"
                            />
                        </div>
                        <RaisedButton 
                            id="login_button" 
                            label="Login" 
                            secondary={true}
                            onClick={this.onSubmit.bind(this)}
                             />

                    </div>
            </div>
        )
    }
}

export default Login;