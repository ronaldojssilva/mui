import logo from './logo.svg';
import './App.css';

import { Button, AppBar, Toolbar, IconButton } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles={
  root:{
    flexgrow:1
  }
}

function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */} 
      <AppBar position='static'>
        <Toolbar>
          <IconButton></IconButton>
        </Toolbar>
      </AppBar>
      <p className='App-intro'>
        <Button variant="contained" color='primary' >Primary</Button>
        <Button variant="contained">Without prop colot</Button>
        </p>

    </div>
  );
}

export default withStyles(styles)( App);
