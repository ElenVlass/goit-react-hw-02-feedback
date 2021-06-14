import {Component} from 'react';

import Layout from './components/Layout';
import Section from './components/Section';
import FeedbackSection from './components/FeedbackSelection';
import StatisticsBar from './components/StatisticsBar';
import Notification from './components/Notification';

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
    countTotalFeedback() {
        const {good, neutral, bad} = this.state;
        return (good + neutral + bad);
    }
    countPositiveFeedbackPercentage() {
        const {good, neutral, bad} = this.state;
        return Math.round(good * 100/ (good + neutral + bad));
    }

    render () {
       const {good, neutral, bad} = this.state;
       const totalFeedbacks = this.countTotalFeedback();
       const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
    <Layout>
        <Section
        title="Please leave feedback">
            <FeedbackSection 
            onIncrement = {this.onIncrement}
            />
        </Section>
        <Section
        title="Statistics">
            {totalFeedbacks === 0 ? 
                <Notification message="No feedback given" />
                :  <StatisticsBar 
                good = {good}
                neutral = {neutral}
                bad = {bad}
                total={totalFeedbacks}
                positivePercentage={positiveFeedbackPercentage}
                />  
            }
        </Section>
    </Layout>
        );
    }
}

export default App;