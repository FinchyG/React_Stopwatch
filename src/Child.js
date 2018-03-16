import React from 'react';

export const Child = (props) => {
    return (
        <div>
          <button onClick={props.doWhatever}>{props.title}</button>
        </div>
      );
}