import React from 'react';

export const HideButton = (props) => {
    return (
        <div>
          <button onClick={props.onClick}>Hide Answer</button>
        </div>
      );
}