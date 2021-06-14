import React from 'react';
import './Controls.scss';

const Controls = ({onIncrement}) => (
    <div>
    <button className="button" onClick={() => {onIncrement("good")}}>Good</button>
    <button className="button" onClick={() => {onIncrement("neutral")}}>Neutral</button>
    <button className="button" onClick={() => {onIncrement("bad")}}>Bad</button>
 </div>
);

export default Controls;