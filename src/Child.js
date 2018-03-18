import React from 'react';

export const Child = (props) => {
    return (
        <div>
          <button onClick={props.doWhatever}>Click Me</button>
          <p>{props.title}</p>
        </div>
      );
}