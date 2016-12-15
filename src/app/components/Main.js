import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import mainStyle from './main.css';
import Paper from 'material-ui/Paper';
import LoginMenu from './LoginMenu';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={mainStyle.main}>        
          <AppBar
            className={mainStyle.headerBar}
            title="EShop"
            iconElementRight={<LoginMenu/>}
          />
          <Paper className={mainStyle.contentArea} zDepth={1} rounded={false}>
            {this.props.children}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
