import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => {
    return good + neutral + bad;
  }

  const total = countTotal();

  const countPositive = () => {
    if (!total) {
      return 0;
    }
    const result = Math.round((good / (total)) * 100);
    return result;
  }

  const onLeaveFeedback = (propertyName) => {
    switch (propertyName) {
      case 'good':
        return setGood((prev) => prev + 1);
      case 'neutral': 
        return setNeutral((prev) => prev + 1);
      case 'bad': 
        return setBad((prev) => prev + 1);
      default:
        return;
    }
  }

  return (
    <div>
      <Section title="Please leave your feedback:">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics:">
        {total ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={countPositive()} /> :
            <Notification message="There is no feedback yet." />}
        </Section>
      </div>
            )
}