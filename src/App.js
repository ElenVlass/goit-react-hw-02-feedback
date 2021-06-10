import {Component} from 'react';

import Layout from './components/Layout';
import FeedbackSection from './components/FeedbackSelection';
import StatisticsBar from './components/StatisticsBar';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

      onIncrement =(mark)=> {
this.setState(prevState => ({
    [mark]: prevState[mark] +1,
}));
    }

    render () {
       const {good, neutral, bad} = this.state;
    return (
    <>
    <Layout>
    <FeedbackSection 
    onIncrement = {this.onIncrement}
    />
    <StatisticsBar 
    good = {good}
    neutral = {neutral}
    bad = {bad}
  
      />

    </Layout>
    </>
        );
    }
}

export default App;