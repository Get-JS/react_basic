import { axios, api } from 'utils/http/client';
import { selialize } from 'utils/http/queryData';
import { NEWS_API_KEY } from 'setting';
import { getNewsListQueryParams } from 'configs/links/urls';

export const listLoad = (data = {}) => {
  const news = selialize({ type: 'news', originDataInfo: { ...data, country: 'kr', apiKey: NEWS_API_KEY } });
  const query = getNewsListQueryParams({ ...news });
  return axios.get(`${api.NEWS}${query}`);
};
