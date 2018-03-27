import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonAnswerPair from './ButtonAnswerPair';

class Quiz extends React.Component {

    render() {
      return (
        <div>
            <ButtonAnswerPair />
            <ButtonAnswerPair />
        </div>
      );
    }

}

ReactDOM.render(<Quiz />, document.getElementById('root'));