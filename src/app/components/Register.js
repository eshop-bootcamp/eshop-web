import React, {Component} from 'react';
import Subheader from 'material-ui/Subheader';
import registerStyle from './register.css';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
//import fetch from 'whatf-fetch';

const textBoxStyle = {
    width: 400
};

const selectStyle = {
    width: 400
};

class Register extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        //fetch('http://j')
    }
    render(){
        return (<div className={registerStyle.main}>
            <Subheader id="header">New User Registration</Subheader>
            <div className={registerStyle.formField}>
                <TextField
                    style={textBoxStyle}
                    floatingLabelText="Name"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    style={textBoxStyle}
                    floatingLabelText="Email ID"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    style={textBoxStyle}
                    floatingLabelText="Username"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    style={textBoxStyle}
                    floatingLabelText="Password"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    style={textBoxStyle}
                    floatingLabelText="Confirm Password"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    style={textBoxStyle}
                    floatingLabelText="Address"
                    />
            </div>
            <div className={registerStyle.formField}>
                <TextField
                    style={textBoxStyle}
                    floatingLabelText="Mobile"
                    />
            </div>
            <div className={registerStyle.formField}>
                <SelectField
                    floatingLabelText="Type"
                    style={selectStyle}
                    >
                    <MenuItem value={1} primaryText="Buyer" />
                    <MenuItem value={2} primaryText="Seller" />
                </SelectField>
            </div>


        </div>)
    }
}

export default Register;