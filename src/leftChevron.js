import React from 'react';

export const LeftChevron = (props) => {

    return (
        <img src={require('./images/left_chevron.png')} alt="left chevron" onClick={props.onClick} />
    )
}