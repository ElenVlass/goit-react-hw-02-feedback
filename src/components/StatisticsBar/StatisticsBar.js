import React from 'react';
import styles from './StatisticsBar.module.css';
import PropTypes from 'prop-types'

class StatisticsBar extends React.Component {
  static defaultProps = {};

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

render () {
  const {good, neutral, bad, total, positivePercentage} = this.props;
  
  return (
<>
  <p className={styles.title}>Good: {good}</p>
  <p className={styles.title}>Neutral: {neutral}</p>
  <p className={styles.title}>Bad: {bad}</p>
  <p className={styles.title}>Total: {total}</p>
  <p className={styles.title}>Positive feedback {positivePercentage}%</p>
</>
)
    };
};

export default StatisticsBar;