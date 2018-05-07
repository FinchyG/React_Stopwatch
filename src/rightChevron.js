import React from 'react';

export const RightChevron = (props) => {

    return (
        <img src={require('./images/right_chevron.png')} alt="right chevron" onClick={props.onClick} />
    )
}