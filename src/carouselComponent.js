import React from 'react';
import {Image_paths} from './Image_paths';
import {LeftChevron} from './leftChevron';
import {RightChevron} from './rightChevron';
import {ImageCarousel} from './imageCarousel';
import {TitleHeader} from './titleHeader';

export class CarouselComponent extends React.Component {
    
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
                <TitleHeader />

                <div className="wideDiv">

                    <div className="narrowDiv">
                    <LeftChevron onClick={this.leftImage} />
                    <ImageCarousel src={Image_paths[this.state.currentImage]} alt="" />
                    <RightChevron onClick={this.rightImage} />
                    </div>
                    
                </div>
                
            </div>
        )
    }

}