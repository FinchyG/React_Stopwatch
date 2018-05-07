import React from 'react';
import ReactDOM from 'react-dom';
import {Image_paths} from './Image_paths';;

class Carousel extends React.Component {
    
    constructor(props){

        super(props);

        this.state = {currentImage: 0};

        this.rightImage = this.rightImage.bind(this);
        this.leftImage  = this.leftImage.bind(this);

    }

    leftImage() {

        let current  = this.state.currentImage;
        let left     = current === 0 ? Image_paths.length - 1 : current - 1;
        
        this.setState({currentImage: left});

    }

    rightImage() {

        let current  = this.state.currentImage;
        let right    = current === Image_paths.length - 1 ? 0 : current + 1;
        
        this.setState({currentImage: right});

    }

    render() {

            
        return (
            
            <div>
                <button onClick={this.leftImage}>Left</button>
                <img src = {Image_paths[this.state.currentImage]} alt="" />
                <button onClick={this.rightImage}>Right</button>
            </div>
        )
    }

}

ReactDOM.render(<Carousel />, document.getElementById('root'));