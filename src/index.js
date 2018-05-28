import React from 'react';
import ReactDOM from 'react-dom';
import {CarouselComponent} from './carouselComponent';
import './quiz.css';

class Carousel extends React.Component {
    
    var centi_seconds = 0;
var seconds       = 0;
var minutes       = 0;

function myCounter() {

    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    seconds = centi_seconds > 99 ? seconds + 1 : seconds;
    minutes = seconds > 59 ? minutes + 1 : minutes;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    seconds = seconds > 59 ? "0" + 0 : seconds;

    centi_seconds = centi_seconds < 10 ? "0" + centi_seconds : centi_seconds;
    centi_seconds = centi_seconds > 99 ? "0" + 0 : centi_seconds;

    document.getElementById("watch_display").innerHTML = minutes + ":" + seconds + ":" + centi_seconds;
    centi_seconds++;

}

function reset() {

    location.reload();

}

function split() {

    var split_time = document.getElementById("watch_display").textContent;
    var ul         = document.getElementById("splits");
    var li         = document.createElement("li");
    
    li.appendChild(document.createTextNode(split_time));
    ul.appendChild(li);

}
    }

}

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

ReactDOM.render(<Carousel />, document.getElementById('root'));