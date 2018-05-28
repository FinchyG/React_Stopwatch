import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Stopwatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            centi_seconds: "00",
            seconds      : "00",
            minutes      : "00"
        }

        this.myCounter = this.myCounter.bind(this);
        
    }

    myCounter() {

        const centi_seconds = this.state.centi_seconds + 1;
        const seconds       = this.state.seconds;
        const minutes       = this.state.minutes;

        this.setState({centi_seconds});
        
        /*minutes = parseInt(minutes);
        seconds = parseInt(seconds);

        seconds = centi_seconds > 99 ? seconds + 1 : seconds;
        minutes = seconds > 59 ? minutes + 1 : minutes;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        seconds = seconds < 10 ? "0" + seconds : seconds;
        seconds = seconds > 59 ? "0" + 0 : seconds;

        centi_seconds = centi_seconds < 10 ? "0" + centi_seconds : centi_seconds;
        centi_seconds = centi_seconds > 99 ? "0" + 0 : centi_seconds;

        document.getElementById("watch_display").innerHTML = minutes + ":" + seconds + ":" + centi_seconds;
        centi_seconds++; */

    }


render(){

    return (

        <div>
            <div id="display_background">
                <p id="watch_display">{this.state.minutes}:{this.state.seconds}:{this.state.centi_seconds}</p>
            </div>

            <div id="buttons">

                <button onclick="myTimer = setInterval(myCounter, 10)">Start</button>

                <button onclick="clearInterval(myTimer)">Stop</button>

            </div>

            <ul id="splits">
            </ul>
        
        </div>

    );
}
}



ReactDOM.render(<Stopwatch />, document.getElementById('root'));