import React from 'react';

export const ShowOrHideButton = (props) => {
    return (
        <div>
          <button onClick={props.onClick}>{props.buttonLabel}</button>
        </div>
      );
}