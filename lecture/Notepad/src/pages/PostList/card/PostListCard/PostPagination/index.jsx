import React from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postSelector } from 'redux/post';
import Pagination from 'components/organism/Pagination';
import { URL_GROUP, getPostListQuery, getPostListQueryParams } from 'configs/links/urls';

const Postpagination = () => {
  const history = useHistory();
  const { search } = useLocation();
  const { username } = useParams();
  const { totalCount } = useSelector(postSelector.pageOption);

  const { tag, currentPage, pageSize } = getPostListQueryParams(search);
  const lastPage = Math.ceil(totalCount / pageSize);

  const handleSearch = ({ currentPage }) => {
    history.push(`${URL_GROUP.POST_LIST}/${getPostListQuery({ tag, currentPage, pageSize, username })}`);
  };

  return <Pagination page={parseInt(currentPage)} lastPage={lastPage} handleSearch={handleSearch} />;
};

export default Postpagination;
