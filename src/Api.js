import Axios from 'axios';

const url = 'https://nc-news-server-2019.herokuapp.com/api';

//I know I need to refactor these to make use of queries rather than individual functions - work in progress

export const getArticles = (params) => {
  return Axios({ method: 'get', url: `${url}/articles`, params }).then(
    ({ data: { articles } }) => {
      return articles;
    },
  );
};

export const getArticleById = (articleid) => {
  return Axios.get(`${url}/articles/${articleid}`).then(
    ({ data: { article } }) => {
      return article;
    },
  );
};
export const getTopics = () => {
  return Axios.get(`${url}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getCommentsByArticle = (articleid) => {
  return Axios.get(`${url}/articles/${articleid}/comments`).then(
    ({ data: { comments } }) => {
      return comments;
    },
  );
};

export const getCommentsByUser = (username) => {
  return Axios.get(`${url}/comments?author=${username}`).then(
    ({ data: { comments } }) => {
      return comments;
    },
  );
};
export const getUsers = () => {
  return Axios.get(`${url}/users`).then(({ data: { users } }) => {
    return users;
  });
};
export const getUsersByUsername = (username) => {
  return Axios.get(`${url}/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const addNewUser = ({ username, name, avatar_url }) => {
  return Axios.post(`${url}/users`, {
    username: username,
    name: name,
    avatar_url: avatar_url,
  }).then(({ data: { user } }) => {
    return user;
  });
};

export const addVoteToArticles = (article_id, amount) => {
  return Axios.patch(`${url}/articles/${article_id}`, {
    inc_votes: amount,
  }).then(({ data: { article } }) => {
    return article;
  });
};
export const addVoteToComments = (comment_id, amount) => {
  return Axios.patch(`${url}/comments/${comment_id}`, {
    inc_votes: amount,
  }).then(({ data: { comment } }) => {
    return comment;
  });
};

export const addNewComment = (article_id, { username, body }) => {
  return Axios.post(`${url}/articles/${article_id}/comments`, {
    username: username,
    body: body,
  }).then(({ data: { comment } }) => {
    return comment;
  });
};

export const deleteComment = (comment_id) => {
  return Axios.delete(`${url}/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};
