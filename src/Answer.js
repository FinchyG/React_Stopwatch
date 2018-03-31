import React from 'react';

export const Answer = (props) => {
    const show = props.show;
    if (show) {
      return <p>{props.answer}</p>
    }
    return <p style={{visibility: "hidden"}}>{props.answer}</p>;
}