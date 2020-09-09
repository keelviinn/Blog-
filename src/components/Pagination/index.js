import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

import { PaginationWrapper } from './styles';

export default function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <PaginationWrapper>
      {!isFirst && <Link to={prevPage}>Anterior</Link>}

      <p>
        {currentPage} de {numPages}
      </p>

      {!isLast && <Link to={nextPage}>Próximo</Link>}
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};
