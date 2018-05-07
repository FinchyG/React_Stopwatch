import React from 'react';
import ReactDOM from 'react-dom';
import {CarouselComponent} from './carouselComponent';
import './quiz.css';

class Carousel extends React.Component {
    
    render() {
        
        return (
        <CarouselComponent />
        );
    }

}

ReactDOM.render(<Carousel />, document.getElementById('root'));