import React,{Component} from 'react';
import IconButton from 'material-ui/IconButton';
import {purple500} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import loginMenuStyle from './loginmenu.css';
import Auth from '../Auth';

const textStyle = {
    color: purple500
};

class LoginMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: Auth.isAuthenticated()
        };
        this._onChange = this._onChange.bind(this);
    }
    componentWillMount(){
        Auth.addChangeListener(this._onChange);
    }
    componentWillUnmount(){
        Auth.removeChangeListener(this._onChange);
    }
    _onChange(){
        this.setState({
            isLoggedIn: Auth.isAuthenticated()
        });
    }
    onLogout(){
        Auth.logout();
        this.props.router.push('/login');
    }
    render(){
        let content;
        if(this.state.isLoggedIn){
            content = (
                <div>
                <span className={loginMenuStyle.welcomeLabel} style={textStyle}>Welcome</span>
                <FontIcon color={purple500} className="material-icons">face</FontIcon>
                <IconMenu
                    iconButtonElement={                    
                    <IconButton>                
                    <MoreVertIcon />
                    </IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Sign out" onClick={this.onLogout.bind(this)} />
                </IconMenu>
            </div>)
        }
        else{
            content = (
                <div>
                    <span className={loginMenuStyle.welcomeLabelGuest} style={textStyle}>Welcome Guest</span>
                </div>
            )
        }
        return (<div>
                    {content}
                </div>
                )
        
    }
}

export default LoginMenu;