import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Stopwatch extends React.Component {

    
render(){

    return (

        <div>
            <div id="display_background">
                <p id="watch_display">00:00:00</p>
            </div>

            <div id="buttons">

                <button onclick="myTimer = setInterval(myCounter, 10)">Start</button>

                <button onclick="clearInterval(myTimer)">Stop</button>

                <button onclick="reset()">Reset</button>

                <button onclick="split()">Split</button>

            </div>

            <ul id="splits">
            </ul>
        
        </div>

    );
}
}



ReactDOM.render(<Stopwatch />, document.getElementById('root'));