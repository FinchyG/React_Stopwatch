import React from 'react';
import ReactDOM from 'react-dom';
import {Image_paths} from './Image_paths';;

class Carousel extends React.Component {
    
    constructor(props){

        super(props);

        this.state = {currentImage: 0};

        this.leftImage = this.leftImage.bind(this);

    }

    leftImage() {

        this.setState({currentImage: this.state.currentImage + 1 });

    }

    render() {

            
        return (
            
            <div>
                <button onClick={this.leftImage}>Left</button>
                <img src = {Image_paths[this.state.currentImage]} />
            </div>
        )
    }

}

ReactDOM.render(<Carousel />, document.getElementById('root'));