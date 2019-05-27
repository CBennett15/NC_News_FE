import React from 'react';
import { TopicList } from './TopicList';
import { getTopics } from '../../Api';
import { Loading } from '../Loading';

export class Topics extends React.Component {
  state = {
    topicList: null,
    isLoading: true,
  };
  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topicList: topics, isLoading: false });
    });
  }
  render() {
    const { topicList, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return <div>{topicList && <TopicList topics={topicList} />}</div>;
  }
}
