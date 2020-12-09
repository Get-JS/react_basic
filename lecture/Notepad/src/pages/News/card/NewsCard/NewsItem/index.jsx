import React from 'react';
import * as S from './styled';

function NewsItem({ data }) {
  return (
    <S.Container>
      {data.urlToImage && (
        <div className="thumbnail">
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <img src={data.urlToImage} alt="tumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
        </h2>
        <p>{data.description}</p>
      </div>
    </S.Container>
  );
}

export default NewsItem;
