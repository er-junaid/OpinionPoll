import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import PollLayout from './components/PollLayout/PollLayout';
import ResultLayout from './containers/ResultLayout/ResultLayout'; 

function App() {
  return (
    <Router>
      <Route exact path="/" component={PollLayout}/>
      <Route exact path="/resultLayout" component={ResultLayout} />
    </Router>
  );
}

export default App;