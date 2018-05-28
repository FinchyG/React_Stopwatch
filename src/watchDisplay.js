import React from 'react';

export const WatchDisplay = (props) => {

    return (
        
        <div id="display_background">
            <p id="watch_display">{props.minutes}:{props.seconds}:{props.centi_seconds}</p>
        </div>
      
    );

}