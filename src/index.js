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

        this.stopwatch_start = this.stopwatch_start.bind(this);
        this.stopwatch_stop  = this.stopwatch_stop.bind(this);
        this.stopwatch_reset = this.stopwatch_reset.bind(this);
        this.stopwatch_split = this.stopwatch_split.bind(this);
        
    }

    stopwatch_start() {

        this.timer = setInterval(()=>{

        const centi_secs     = this.state.centi_seconds;        
        const centi_secs_num = parseInt(centi_secs) + 1; 
        const centi_secs_0   = centi_secs_num < 10 ? "0" + centi_secs_num : centi_secs_num;
        const centi_seconds  = centi_secs_0 > 99 ? "00"   : centi_secs_0;
        
        const secs       = this.state.seconds;
        const secs_num   = parseInt(secs);
        const secs_add_1 = centi_secs_num > 99 ? secs_num + 1 : secs_num;
        const secs_0     = secs_add_1 < 10 ? "0" + secs_add_1 : secs_add_1;
        const seconds    = secs_0 > 59 ? "00" : secs_0;
        
        const mins       = this.state.minutes;
        const mins_num   = parseInt(mins);
        const mins_add_1 = secs_0 > 59 ? mins_num + 1 : mins_num;
        const minutes    = mins_add_1 < 10 ? "0" + mins_add_1 : mins_add_1;
        
        this.setState({centi_seconds, seconds, minutes});},10);
    }

    stopwatch_stop() {
        clearInterval(this.timer);
    }

    stopwatch_reset() {
       
        this.setState({centi_seconds: "00", seconds: "00", minutes: "00"});

        var ul         = document.getElementById("splits");
        while( ul.firstChild ){
            ul.removeChild( ul.firstChild );
          }
    
    }

    stopwatch_split() {

        var split_time = document.getElementById("watch_display").textContent;
        var ul         = document.getElementById("splits");
        var li         = document.createElement("li");
        
        li.appendChild(document.createTextNode(split_time));
        ul.appendChild(li);
    
    }




render(){

    return (

        <div>
            <div id="display_background">
                <p id="watch_display">{this.state.minutes}:{this.state.seconds}:{this.state.centi_seconds}</p>
            </div>

            <div id="buttons">

                <button onClick={this.stopwatch_start}>Start</button>

                <button onClick={this.stopwatch_stop}>Stop</button>

                <button onClick={this.stopwatch_reset}>Reset</button>

                <button onClick={this.stopwatch_split}>Split</button>

            </div>

            <ul id="splits">
            </ul>
        
        </div>

    );
}
}



ReactDOM.render(<Stopwatch />, document.getElementById('root'));