import {Component} from 'react';
import styles from './FeedbackSelection.module.css';
import Controls from '../Controls';

class FeedbackSection extends Component {

  render () {
  return (
  <>
     <h1 className={styles.title}>Please leave feedback</h1>
    <Controls 
    onIncrement = {this.props.onIncrement}
    />
  </>
    );
  }
};

export default FeedbackSection;