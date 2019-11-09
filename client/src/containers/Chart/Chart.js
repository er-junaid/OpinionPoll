import React, {Component, Fragment} from 'react';
import './Chart.css';
import {Bar, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'pie',
            chartData : {
                labels: ['Option_1', 'Option_2', 'Option_3', 'Option_4'],
                datasets: [
                    {
                        label: 'number_of_responses',
                        data: [this.props.data.option1, this.props.data.option2, 
                                this.props.data.option3, this.props.data.option4],
                        backgroundColor: ['rgba(3, 37, 71, 0.6)', 'rgba(51, 102, 153, 0.6)',
                                'rgba(118, 144, 170, 0.6)', 'rgba(191, 208, 224, 0.6)']
                    }
                ]
            }
        };
    }

    handleClick = () => {
        const chart = this.state.show === 'bar' ? 'pie' : 'bar';
        this.setState({
            show: chart
        });
    }

    render() {
        let element = null, button = null;

        if(this.props.data){
            const optionsObj = {
                title: {
                    display: true,
                    text: 'Question_' + this.props.data.questionNumber,
                    fontWeight: 'bold',
                    fontSize: 25,
                    fontStyle: 'italic',
                    fontFamily: 'sans-serif',
                },
                legend: {
                    display: true,
                    position: "bottom"
                }
            };
            if (this.state.show === 'bar') {
                optionsObj.scales = {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                };
                element = <Bar data={this.state.chartData} options={optionsObj}/>;
            } else if (this.state.show === 'pie') {
                element = <Pie data={this.state.chartData} options={optionsObj}/>;
            }
            button = <div className="container rmv-padding">
                    <div className="row rmv-padding">
                        <div className="col-12 text-md-right text-center rmv-padding">
                        <button className="btn btn-outline-primary btn-sm" id="chart-button" onClick={this.handleClick}>
                        {this.state.show === 'bar' ? 'Show Pie Chart' : 'Show Bar Chart'}
                        </button>
                        </div>
                    </div>
                </div>
        }

        return (
            <Fragment>
                {element}
                {button}
            </Fragment>
        );
    }
}

export default Chart;