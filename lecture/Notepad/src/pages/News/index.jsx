import React from 'react';
import BasedTemplate from 'components/templates/BasedTemplate';
import NewsList from 'components/organism/NewsList';
import NewsNavBar from 'components/organism/NewsNavBar';
import NewsLinkArr from 'configs/links/News';

function NewsPage() {
  return (
    <BasedTemplate contentTitle={'News Page'}>
      <NewsNavBar NewsLinkArr={NewsLinkArr} />
      <NewsList />
    </BasedTemplate>
  );
}

export default NewsPage;
