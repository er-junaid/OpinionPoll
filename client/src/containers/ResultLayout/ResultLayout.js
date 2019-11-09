import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Result from '../../components/Result/Result';
import './ResultLayout.css';

class ResultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultResponse: {}
        };
    }

    componentDidMount() {
        this.apiRequest();
    }

    apiRequest = async () => {    
        try {
          const res = await axios.get('http://localhost:5000/api/result');
          this.setState({
              resultResponse: res
          });
        } catch (err) {
          console.error(err);
        }
    }

    render() {
        return (
            <Fragment>
                <div className="jumbotron">
                    <h1>Poll Results</h1>
                </div>
                <Result resultResponseArray={this.state.resultResponse.data}/>
            </Fragment>
        );
    }
}
  
export default ResultLayout;