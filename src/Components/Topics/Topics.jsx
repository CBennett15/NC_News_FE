import React from 'react';
import { TopicList } from './TopicList';
import { getTopics } from '../../Api';

export class Topics extends React.Component {
  state = {
    topicList: null,
  };
  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topicList: topics });
    });
  }
  render() {
    const { topicList } = this.state;
    return <div>{topicList && <TopicList topics={topicList} />}</div>;
  }
}
