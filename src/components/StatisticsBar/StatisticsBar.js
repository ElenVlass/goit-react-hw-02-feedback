import React from 'react';
import styles from './StatisticsBar.module.css'

class StatisticsBar extends React.Component {

render () {
  const {good, neutral, bad} = this.props;
  
  return (
<>
  <h2 className={styles.title}>Statistics</h2>
  <p>Good: {good}</p>
  <p>Neutral: {neutral}</p>
  <p>Bad: {bad}</p>
  <p>Total: {good + neutral + bad}</p>
  <p>Positive feedback {Math.round(good * 100/ (good + neutral + bad)) }%</p>
</>
)
    };
};

export default StatisticsBar;