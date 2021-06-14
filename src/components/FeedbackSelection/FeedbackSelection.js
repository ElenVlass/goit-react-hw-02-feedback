import {Component} from 'react';
import Controls from '../Controls';
import PropTypes from 'prop-types'

class FeedbackSection extends Component {
  static propTypes = {
    onIncrement: PropTypes.func.isRequired,
  };

  render () {
  return (
    <Controls 
    onIncrement = {this.props.onIncrement}
    />
    );
  }
};

export default FeedbackSection;