import React from 'react';
import styles from './Controls.module.css';

const Controls = ({onIncrement}) => (
    <div>
    <button className={styles.button} onClick={() => {onIncrement("good")}}>Good</button>
    <button className={styles.button} onClick={() => {onIncrement("neutral")}}>Neutral</button>
    <button className={styles.button} onClick={() => {onIncrement("bad")}}>Bad</button>
 </div>
);

export default Controls;