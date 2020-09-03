import React from 'react';
import propTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import { CommentsWrapper, CommentsTitle } from './styles';

export default function Comments({ url, title }) {
  const completeURL = `localhost:8000/${url}`;

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="Kelvin"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}
