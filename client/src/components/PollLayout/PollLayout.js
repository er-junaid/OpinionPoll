import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './PollLayout.css';
import PollForm from '../../containers/PollForm/PollForm';

function PollLayout() {
    return (
      <Fragment>
          <div className="jumbotron">
              <h1>Opinion Poll</h1>
              <p>Please share your opinions below and submit them</p>
              <Link to="/resultLayout" className="btn btn-outline-primary" id="link-btn">See Poll Results</Link>
          </div>
          <PollForm />
      </Fragment>
    );
}
  
  export default PollLayout;