import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HideButton } from './HideButton';
import { Answer } from './Answer';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
        this.hideTheAnswer = this.hideTheAnswer.bind(this);
    }

    hideTheAnswer() {
        this.setState({show: false});
    }

    render() {
      return (
        <div>
            <HideButton onClick={this.hideTheAnswer} />
            <Answer show={this.state.show} />
        </div>
      );
    }

}

ReactDOM.render(<Parent />, document.getElementById('root'));