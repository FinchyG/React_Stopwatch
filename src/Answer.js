import React from 'react';

export const Answer = (props) => {
    const show = props.show;
    if (show) {
      return <p>Answer</p>
    }
    return <p style={{visibility: "hidden"}}>Answer</p>;
}