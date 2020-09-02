import React from 'react';

import {
  PostItemLink,
  PostItemWrapper,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription
} from './styles';

export default function PostItem() {
  return (
    <PostItemLink to="/slug">
      <PostItemWrapper>
        <PostItemTag background="#454545">
          Misc
        </PostItemTag>
        <PostItemInfo>
          <PostItemDate>
            30 de julho de 2019 • 4 min de leitura
          </PostItemDate>
          <PostItemTitle>
            Diga não a Medium: tenha sua própria plataforma
          </PostItemTitle>
          <PostItemDescription>
            Algumas razões para você ter sua própria plataforma.
          </PostItemDescription>
        </PostItemInfo>
      </PostItemWrapper>
    </PostItemLink>
  )
}