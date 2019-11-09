import React from 'react';
import './Result.css';
import Chart from '../../containers/Chart/Chart';

function Result(props) {
    let elementList = null;
    if (props.resultResponseArray) {
        elementList = props.resultResponseArray.map(element => {
            return <div className="row chart" key={element._id}>
                <div className="col-md-8 offset-md-2">
                    <Chart data={element} />
                </div>
            </div>;
        });
    }
    return (
        <div className="container">
            {elementList}
        </div>
    );
}

export default Result;