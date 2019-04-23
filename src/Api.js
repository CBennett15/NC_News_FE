import Axios from 'axios';

const url = 'https://nc-news-server-2019.herokuapp.com/api/';

export const getArticles = () => {
  return Axios.get(`${url}/articles`).then(({ data: { articles } }) => {
    return articles;
  });
};

export const getLatestArticles = () => {
  return Axios.get(`${url}/articles?limit=5`).then(({ data: { articles } }) => {
    return articles;
  });
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
export const getArticlesByTopic = (slug) => {
  return Axios.get(`${url}/articles?topic=${slug}`).then(
    ({ data: { articles } }) => {
      return articles;
    },
  );
};

export const getCommentsByArticle = (articleid) => {
  return Axios.get(`${url}/articles/${articleid}/comments`).then(
    ({ data: { comments } }) => {
      return comments;
    },
  );
};
export const getArticlesByUser = (username) => {
  return Axios.get(`${url}/articles?author=${username}`).then(
    ({ data: { articles } }) => {
      return articles;
    },
  );
};
