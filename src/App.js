import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
// import Nav from './components/Nav';
import Home from './Home';
// import Form from './components/Form'
import Place from './Place';
import Pieces from './Pieces';
import Splash from './Splash';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <Route exact path='/' component={Splash} />
        {/* <Route exact path='/register' component={Form} /> */}
        <Route exact path='/place' component={Place} />
        <Route exact path='/pieces' component={Pieces} /> 
        <Route exact path='/home' component={Home} /> 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

