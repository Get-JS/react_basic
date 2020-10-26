import { axios, api } from 'utils/http/client';
import { selialize } from 'utils/http/queryData';
import { getQueryParams } from 'utils/http/queryParam';

export const getNews = (data) => {
  const news = selialize({ type: 'news', originDataInfo: data });
  const query = getQueryParams(news);
  return axios.get(`${api.NEWS}${query}`);
};
