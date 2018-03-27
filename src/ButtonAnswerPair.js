import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ShowOrHideButton } from './ShowOrHideButton';
import { Answer } from './Answer';

export default class ButtonAnswerPair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show       : false,
                      buttonLabel: "Show Answer"};
        this.hideOrShowAnswer = this.hideOrShowAnswer.bind(this);
    }

    hideOrShowAnswer() {
        const makeVisible    = this.state.show        === false ? true : false;
        const setButtonLabel = this.state.buttonLabel === "Show Answer" ? "Hide Answer" : "Show Answer"; 
        this.setState({show: makeVisible});
        this.setState({buttonLabel: setButtonLabel});
    }

    render() {
      return (
        <div>
            <ShowOrHideButton onClick={this.hideOrShowAnswer} buttonLabel={this.state.buttonLabel} />
            <Answer show={this.state.show} />
        </div>
      );
    }

}