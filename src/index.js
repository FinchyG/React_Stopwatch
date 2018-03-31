import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionComponent from './QuestionComponent';

class Quiz extends React.Component {

    render() {
      return (
        <div>
            <QuestionComponent question="Two plus two?" 
                               answer="Four" />
            <QuestionComponent question="Three plus thres"
                               answer="Six"  />
        </div>
      );
    }

}

ReactDOM.render(<Quiz />, document.getElementById('root'));