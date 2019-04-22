import React from 'react';
import Axios from 'axios';
import { TopicList } from './TopicList';

export class Topics extends React.Component {
  state = {
    topicList: null,
  };
  componentDidMount() {
    const url = 'https://nc-news-server-2019.herokuapp.com/api/topics';
    Axios.get(url).then(({ data: { topics } }) => {
      this.setState({ topicList: topics });
    });
  }
  render() {
    return (
      <div>
        {this.state.topicList && <TopicList topics={this.state.topicList} />}
      </div>
    );
  }
}
