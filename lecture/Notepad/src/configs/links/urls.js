import qs from 'qs';

export const URL_GROUP = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  POST: '/post',
  POST_LIST: '/post/list',
  POST_ADD: '/post/add',
  POST_MODIFY: '/post/modify',
};

export function getPostListQuery({ tag, currentPage, pageSize, username }) {
  const query = qs.stringify({ tag, currentPage, pageSize });
  return username ? `@${username}/?${query}` : `?${query}`;
}

export function getPostListQueryParams(search) {
  const CURRENT_PAGE = 1;
  const PAGE_SIZE = 5;
  const { tag, currentPage = CURRENT_PAGE, pageSize = PAGE_SIZE } = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  return { tag, currentPage: parseInt(currentPage), pageSize: parseInt(pageSize) };
}

export function getPostQuery({ id }) {
  if (!id) return;
  else return id;
}

export function getNewsListQueryParams({ category, country, apiKey }) {
  const query = qs.stringify({ category, country, apiKey });
  return `?${query}`;
}
