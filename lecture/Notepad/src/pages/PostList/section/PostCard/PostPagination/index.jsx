import React from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postSelector } from 'redux/post';
import qs from 'qs';
import Pagination from 'components/organism/Pagination';

const Postpagination = () => {
  const { totalCount, pageSize } = useSelector(postSelector.pageOption);
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { username } = params;
  const lastPage = Math.ceil(totalCount / pageSize);

  const handleSearch = ({ page }) => {
    const query = qs.stringify({ tag, page });
    history.push(username ? `/@${username}?${query}` : `/?${query}`);
  };

  return <Pagination page={parseInt(page)} lastPage={lastPage} handleSearch={handleSearch} />;
};

export default Postpagination;
