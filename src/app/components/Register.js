import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Subheader from 'material-ui/Subheader';
import registerStyle from './register.css';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';

const textBoxStyle = {
    width: 400
};

const selectStyle = {
    width: 400
};

const REGISTER_END_POINT = 'https://localhost:8443/user/register/buyer';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            newUser: {
                name: "",
                emailid: "",
                username: "",
                password: "",
                confirmPassword: "",
                address: "",
                mobile: "",
                typeOfUser: ""
            },
            validations: {
                confirmPassword: false,
                mobile: false,
                name: false,
                email: false,
                username: false,
                address: false
            }
        };
    }
    onChange(keyName, event){
        let value = event.target.value;
        let resultObj = {};
        resultObj[keyName] = value; 
        this.setState({
            newUser: Object.assign({}, this.state.newUser, resultObj) 
        });
    }
    onTypeChange(event, index, value){
        this.setState({
            newUser: Object.assign({}, this.state.newUser, {typeOfUser: value})
        });
    }
    validate(){
        let validations = Object.keys(this.state.newUser).reduce((acc, curr) => {
            acc[curr] = !this.state.newUser[curr];
            return acc;
        }, {});
        validations.confirmPassword = !(this.state.newUser.password && 0 < this.state.newUser.password.length && this.state.newUser.password === this.state.newUser.confirmPassword);
        validations.mobile = !(this.state.newUser.mobile && this.state.newUser.mobile.length >= 8 && this.state.newUser.mobile.length<= 10);
        let newValidations = Object.assign({}, this.state.validations,validations);
        this.setState({
            validations: newValidations
        });

        let isInvalid = newValidations.confirmPassword 
                            || newValidations.mobile 
                            || newValidations.name 
                            || newValidations.email
                            || newValidations.username
                            || newValidations.address;

        return isInvalid? false: true;
    }
    onSubmit(){
        if(this.validate()){
            this.registerBuyer();
        }        
    }

    registerBuyer() {
        fetch(REGISTER_END_POINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(this.state.newUser)
            })
            .then(response => {
                if (response.status == 201) {
                    alert("Registered Buyer successfully. Go to categories page");
                } else {
                    return response.json()
                }
            }).then(json => {

            });
    }

    render(){
        return (<div className={registerStyle.main}>
            <Subheader id="header">New User Registration</Subheader>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.name}
                    ref="name"
                    onChange={this.onChange.bind(this, 'name')}
                    style={textBoxStyle}
                    errorText={this.state.validations.name? 'Mandatory field': ''}
                    floatingLabelText="Name"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.emailid}
                    ref="emailid"
                    onChange={this.onChange.bind(this, 'emailid')}
                    errorText={this.state.validations.email? 'Mandatory field': ''}
                    style={textBoxStyle}
                    floatingLabelText="Email ID"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.username}
                    ref="username"
                    onChange={this.onChange.bind(this, 'username')}
                    errorText={this.state.validations.username? 'Mandatory field': ''}
                    style={textBoxStyle}
                    floatingLabelText="Username"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.password}
                    ref="password"
                    type="password"
                    onChange={this.onChange.bind(this, 'password')}
                    errorText={this.state.validations.password? 'Mandatory field': ''}
                    style={textBoxStyle}
                    floatingLabelText="Password"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.confirmPassword}
                    style={textBoxStyle}
                    type="password"
                    onChange={this.onChange.bind(this, 'confirmPassword')}
                    errorText={this.state.validations.confirmPassword? 'Passwords do not meet': ''}
                    floatingLabelText="Confirm Password"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.address}
                    style={textBoxStyle}
                    onChange={this.onChange.bind(this, 'address')}
                    errorText={this.state.validations.address? 'Mandatory field': ''}
                    floatingLabelText="Address"
                    multiLine={true}
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.mobile}
                    style={textBoxStyle}
                    onChange={this.onChange.bind(this, 'mobile')}
                    errorText={this.state.validations.mobile? 'Mobile Number can be only a maximum of 10': ''}
                    floatingLabelText="Mobile"
                    />
            </div>
            <div className={registerStyle.formField}>
                <SelectField
                    value={this.state.newUser.typeOfUser}
                    ref="typeOfUser"
                    onChange={this.onTypeChange.bind(this)}
                    floatingLabelText="Type"
                    style={selectStyle}
                    >
                    <MenuItem value={1} primaryText="Buyer" />
                    <MenuItem value={2} primaryText="Seller" />
                </SelectField>
            </div>
            <div className={registerStyle.formAction}>
                <RaisedButton
                    onClick={this.onSubmit.bind(this)}
                    label="Submit"
                    primary={true}
                />
            </div>
        </div>)
    }
}

export default Register;