import React from 'react';
import classes from './loading.module.css'
const Loading = () => {
    return (
    <div className={classes.Loading}>
            <svg width="100" height="100" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="75" cy="75" r="72.5" stroke="url(#paint0_linear_803_8)" stroke-width="5"/>
<defs>
<linearGradient id="paint0_linear_803_8" x1="12" y1="25" x2="83.5" y2="93.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#232323"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

        </div>
    );
}

export default Loading;
