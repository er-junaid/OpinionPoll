import React, {Component} from 'react';
import axios from 'axios';
import FormInput from '../../components/FormInput/FormInput';
import './PollForm.css';

class PollForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: ["", "", ""]
        };

        this.questions = [
            'Who is your favorite author?',
            'Who is your favourite football player?',
            'Which tourist place you like most?'
        ];

        this.possibleAnswers = [
            ['Miguel de Cervantes', 'Charles Dickens', 'J.R.R. Tolkien', 'Antoine de Saint-Exuper'],
            ['Lionel Messi', 'Cristiano Ronaldo', 'Muhammad Salah', 'Neymar'],
            ['Kashmir', 'Ladakh', 'Switzerland', 'Mauritius']
        ];

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const questionNumber = parseInt(event.target.name);
        var copiedState = {...this.state};
        copiedState.answers[questionNumber] = value;
        this.setState(copiedState);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify(this.state.answers);
        try {
            const res = await axios.post('http://localhost:5000/api/poll', body, config);
            if(!alert(res.data.msg)) { 
                window.location.reload();
            }           
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        let questionList = this.questions.map((question, index) => {
            return <div className="row" key={index}>
                        <div className="col-10 offset-1 col-md-6 offset-md-3 question">
                            <h4 className="h4-text-color">{question}</h4>
                        </div>
                        <div className="col-10 offset-1 col-md-6 offset-md-3">
                            <FormInput questionNumber={index} value={this.state.answers[index]} 
                                        onChanged={this.handleInputChange} possibleAnswers={this.possibleAnswers[index]} />
                        </div>
                    </div>;
        });
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}> 
                    {questionList}
                    <div className="row">
                        <div className="col-10 offset-1 col-md-6 offset-md-3">
                            <input type="submit" value="Submit"
                                    className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default PollForm;