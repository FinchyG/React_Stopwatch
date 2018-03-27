import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HideButton } from './HideButton';
import { Answer } from './Answer';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
        this.hideOrShowAnswer = this.hideOrShowAnswer.bind(this);
    }

    hideOrShowAnswer() {
        const makeVisible = this.state.show === false ? true : false;
        this.setState({show: makeVisible});
    }

    render() {
      return (
        <div>
            <HideButton onClick={this.hideOrShowAnswer} />
            <Answer show={this.state.show} />
        </div>
      );
    }

}

ReactDOM.render(<Parent />, document.getElementById('root'));