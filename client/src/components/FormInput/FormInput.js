import React, {Fragment} from 'react';
import './FormInput.css';

function FormInput(props) {
    let optionList = props.possibleAnswers.map((posAnswer, index) => {
        return <div key={index}>
                <label>
                    <input type="radio" value={'option' + (index + 1)}
                            checked={props.value === 'option' + (index + 1)} name={props.questionNumber}
                            onChange={props.onChanged} required/>
                    {posAnswer}
                </label>
                <br/>
            </div>;
                
    });
    return <Fragment>
        {optionList}
    </Fragment>;
}

export default FormInput;