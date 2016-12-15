import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Subheader from 'material-ui/Subheader';
import registerStyle from './register.css';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import 'whatwg-fetch';
import config from './config';

const textBoxStyle = {
    width: 400
};

const selectStyle = {
    width: 400
};


class Register extends Component {
    constructor() {
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
                typeOfUser: "",
                gender: "",
                dob: {},
                pannumber: "",
                experience: ""
            },
            validations: {
                confirmPassword: false,
                mobile: false,
                name: false,
                email: false,
                username: false,
                address: false,
                typeOfUser: false,
                pannumber: false,
                experience: false
            }
        };
    }
    onChange(keyName, event) {
        let value = event.target.value;
        let resultObj = {};
        resultObj[keyName] = value;
        this.setState({
            newUser: Object.assign({}, this.state.newUser, resultObj)
        });
    }

    onTypeChange(keyName, event, index, value) {
        let resultObj = {};
        resultObj[keyName] = value;
        this.setState({
            newUser: Object.assign({}, this.state.newUser, resultObj)
        });
    }

    onDateChange(event, value) {
        this.setState({
            newUser: Object.assign({}, this.state.newUser, { dob: value })
        });
    }

    isEmpty(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    validate() {
        let validations = Object.keys(this.state.newUser).reduce((acc, curr) => {
            acc[curr] = !this.state.newUser[curr];
            return acc;
        }, {});
        validations.confirmPassword = !(this.state.newUser.password && 0 < this.state.newUser.password.length && this.state.newUser.password === this.state.newUser.confirmPassword);
        validations.mobile = !(this.state.newUser.mobile && this.state.newUser.mobile.length >= 8 && this.state.newUser.mobile.length <= 10);
        validations.email = !(this.state.newUser.emailid && this.state.newUser.emailid.length > 0);

        let isSpecificUserInvalid = false;
        if (this.state.newUser.typeOfUser == "Buyer") {
            validations.dob = this.isEmpty(this.state.newUser.dob);
            validations.typeOfUser = false;
            isSpecificUserInvalid = validations.dob;
        } else {
            validations.typeOfUser = true;
        }

        let newValidations = Object.assign({}, this.state.validations, validations);
        this.setState({
            validations: newValidations
        });


        let isInvalid = newValidations.confirmPassword
            || newValidations.mobile
            || newValidations.name
            || newValidations.email
            || newValidations.username
            || newValidations.address
            || newValidations.typeOfUser;

        return isInvalid ? false : isSpecificUserInvalid;
    }

    onSubmit() {
        if (!this.validate()) {
            return;
        }
        if (this.state.newUser.typeOfUser == "Buyer") {
            this.registerBuyer();
        } else {
            alert("Ajax call for seller");
        }
    }

    registerBuyer() {
        let url = "/user/register/buyer"
        fetch(config.baseurl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(this.state.newUser)
        })
            .then(response => {
                if (response.status == 201) {
                    alert("Registered Buyer successfully. Please login.");
                    this.props.router.push('/login');
                } else {
                    return response.json()
                }
            }).then(json => {

            });
    }

    render() {
        let buyerComponent = (
            <div>
                <div className={registerStyle.formField}>
                    <SelectField
                        value={this.state.newUser.gender}
                        ref="gender"
                        onChange={this.onTypeChange.bind(this, 'gender')}
                        floatingLabelText="Gender"
                        style={selectStyle}
                        >
                        <MenuItem value={"Male"} primaryText="Male" />
                        <MenuItem value={"Female"} primaryText="Female" />
                    </SelectField>
                </div>
                <div className={registerStyle.formField}>
                    <DatePicker hintText="Date Of Birth" container="inline"
                        value={this.state.newUser.dob}
                        ref="dob"
                        onChange={this.onDateChange.bind(this)}
                        style={selectStyle}
                        errorText={this.state.validations.name ? 'Mandatory field' : ''}
                        floatingLabelText="Date of Birth"
                        />
                </div>
            </div>
        );

        let sellerComponent = (
            <div>
                <div className={registerStyle.formField}>
                    <TextField
                        value={this.state.newUser.pannumber}
                        ref="pannumber"
                        onChange={this.onChange.bind(this, 'pannumber')}
                        style={textBoxStyle}
                        errorText={this.state.validations.name ? 'Mandatory field' : ''}
                        floatingLabelText="PAN Number"
                        />
                </div>
                <div className={registerStyle.formField}>
                    <TextField
                        value={this.state.newUser.experience}
                        ref="experience"
                        onChange={this.onChange.bind(this, 'experience')}
                        style={textBoxStyle}
                        errorText={this.state.validations.name ? 'Mandatory field' : ''}
                        floatingLabelText="Experience"
                        />
                </div>
            </div>
        );

        let userSpecificComponent;
        if (this.state.newUser.typeOfUser == "Buyer") {
            userSpecificComponent = buyerComponent;
        } else if (this.state.newUser.typeOfUser == "Seller") {
            userSpecificComponent = sellerComponent;
        }

        return (<div className={registerStyle.main}>
            <Subheader id="header">New User Registration</Subheader>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.name}
                    ref="name"
                    onChange={this.onChange.bind(this, 'name')}
                    style={textBoxStyle}
                    errorText={this.state.validations.name ? 'Mandatory field' : ''}
                    floatingLabelText="Name"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.emailid}
                    ref="emailid"
                    onChange={this.onChange.bind(this, 'emailid')}
                    errorText={this.state.validations.email ? 'Mandatory field' : ''}
                    style={textBoxStyle}
                    floatingLabelText="Email ID"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.username}
                    ref="username"
                    onChange={this.onChange.bind(this, 'username')}
                    errorText={this.state.validations.username ? 'Mandatory field' : ''}
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
                    errorText={this.state.validations.password ? 'Mandatory field' : ''}
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
                    errorText={this.state.validations.confirmPassword ? 'Passwords do not meet' : ''}
                    floatingLabelText="Confirm Password"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.address}
                    style={textBoxStyle}
                    onChange={this.onChange.bind(this, 'address')}
                    errorText={this.state.validations.address ? 'Mandatory field' : ''}
                    floatingLabelText="Address"
                    multiLine={true}
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    value={this.state.newUser.mobile}
                    style={textBoxStyle}
                    onChange={this.onChange.bind(this, 'mobile')}
                    errorText={this.state.validations.mobile ? 'Mobile Number can be only a maximum of 10' : ''}
                    floatingLabelText="Mobile"
                    />
            </div>
            <div className={registerStyle.formField}>
                <SelectField
                    value={this.state.newUser.typeOfUser}
                    ref="typeOfUser"
                    onChange={this.onTypeChange.bind(this, 'typeOfUser')}
                    floatingLabelText="Type"
                    style={selectStyle}
                    errorText={this.state.validations.typeOfUser ? 'Select type of User' : ''}
                    >
                    <MenuItem value={"Buyer"} primaryText="Buyer" />
                    <MenuItem value={"Seller"} primaryText="Seller" />
                </SelectField>
            </div>
            {userSpecificComponent}
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