import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Stopwatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            centi_seconds: "99",
            seconds      : "00",
            minutes      : "00"
        }

        this.stopwatch_start = this.stopwatch_start.bind(this);
        this.stopwatch_stop  = this.stopwatch_stop.bind(this);
        
    }

    stopwatch_start() {

        this.timer = setInterval(()=>{

        const centi_secs      = this.state.centi_seconds;        
        const centi_secs_num  = parseInt(centi_secs) + 1; 
        const centi_seconds_0 = centi_secs_num < 10 ? "0" + centi_secs_num : centi_secs_num;
        const centi_seconds   = centi_seconds_0 > 99 ? "00"   : centi_seconds_0;
        
        const secs       = this.state.seconds;
        const secs_num   = parseInt(secs);
        const secs_add_1 = centi_secs_num > 99 ? secs_num + 1 : secs_num;
        const seconds_0  = secs_add_1 < 10 ? "0" + secs_add_1 : secs_add_1;
        const seconds    = seconds_0 > 99 ? "00" : seconds_0;
        
         

        
        const minutes       = this.state.minutes;

        this.setState({seconds, centi_seconds});},10);
    }

    stopwatch_stop() {
        clearInterval(this.timer);
    }


        
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

    



render(){

    return (

        <div>
            <div id="display_background">
                <p id="watch_display">{this.state.minutes}:{this.state.seconds}:{this.state.centi_seconds}</p>
            </div>

            <div id="buttons">

                <button onClick={this.stopwatch_start}>Start</button>

                <button onClick={this.stopwatch_stop}>Stop</button>

            </div>

            <ul id="splits">
            </ul>
        
        </div>

    );
}
}



ReactDOM.render(<Stopwatch />, document.getElementById('root'));