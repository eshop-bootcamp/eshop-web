import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import mainStyle from './main.css';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';


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
            iconElementRight={<IconButton><FontIcon color={red500} className="material-icons">face</FontIcon></IconButton>}
          />
          <Paper className={mainStyle.contentArea} zDepth={1} rounded={false}>
            {this.props.children}
          </Paper>
          <div className={mainStyle.footer}>
            This is the footer
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
