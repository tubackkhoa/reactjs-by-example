/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import {deepOrange500,cyan500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import AppBar from 'material-ui/AppBar'
import DatePicker from 'material-ui/DatePicker'


import HorizontalLinearStepper from './components/HorizontalLinearStepper' 
import TableExampleComplex from './components/TableExampleComplex' 

const styles = {
  container: {
    textAlign: 'center'    
  },
};

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };

    
  }


  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {

    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
         
        <div style={styles.container}>          
          <Dialog
            open={this.state.open}
            title="MCBook Dialog"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            abcdefc
            <DatePicker hintText="Landscape Dialog" mode="landscape" />
            <HorizontalLinearStepper/>
          </Dialog>
          <h1>Material-UI-DEMO-GOOOOOD</h1>
          <h2>Example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
          <TableExampleComplex />
        </div>
      
    )
  }
}


export default App
