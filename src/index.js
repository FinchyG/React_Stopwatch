import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "placeholder title"};
        this.changeTheWorld = this.changeTheWorld.bind(this);
    }

    changeTheWorld() {
        const newTitle = "New Title";
        this.setState({title: newTitle});
    }

    render() {
      return (
        <div>
            <Child doWhatever={this.changeTheWorld} />
            <Sibling  title={this.state.title} />
        </div>
      );
    }

}

ReactDOM.render(<Parent />, document.getElementById('root'));