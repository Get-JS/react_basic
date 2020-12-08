import React from 'react';
import { Helmet } from 'react-helmet-async';
import BasedTemplate from 'components/templates/BasedTemplate';
import NewsNavBar from 'components/organism/NewsNavBar';
import NewsCard from './card/NewsCard';
import usePageFilter from './hooks/usePageFilter';
import NewsLinkArr from 'configs/links/News';

function NewsPage() {
  usePageFilter();

  return (
    <BasedTemplate>
      <Helmet>
        <title>NEWS</title>
      </Helmet>
      <NewsNavBar data={NewsLinkArr} />
      <NewsCard />
    </BasedTemplate>
  );
}

export default NewsPage;
