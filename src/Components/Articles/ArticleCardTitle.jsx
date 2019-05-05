import React from 'react';
import { ReusableButton } from '../Buttons/ReusableButton';

export class ArticleCardTitle extends React.Component {
  state = {
    isExpanded: false,
  };
  render() {
    const { articleInfo, voteChange } = this.props;
    const { isExpanded } = this.state;
    return (
      <div>
        <h4>{articleInfo.title}</h4>
        {!isExpanded && (
          <p>
            {' '}
            {articleInfo.body.replace(/(.{150})..+/, '$1...')}
            <ReusableButton
              className="readmore"
              text={'Read More'}
              onClick={this.handleBody}
            />
          </p>
        )}
        {isExpanded && (
          <p>
            {articleInfo.body}
            <ReusableButton
              className="readmore"
              text={'Read Less'}
              onClick={this.handleBody}
            />
          </p>
        )}
        <p>Votes: {articleInfo.votes + voteChange}</p>
      </div>
    );
  }
  handleBody = () => {
    this.setState((prevState) => {
      return { isExpanded: !prevState.isExpanded };
    });
  };
}
