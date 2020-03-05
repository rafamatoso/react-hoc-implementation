import React from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from './hoc/fetchAPI';
import { withLoading } from './hoc/withLoading';

const Infos = ({ data }) => {
  const { avatar_url, blog, login, name } = data;

  return (
    <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
      <li>
        <img
          alt="me"
          src={avatar_url}
          style={{ margin: '0 auto', width: '150px', height: '150px' }}
        ></img>
      </li>
      <li>{name}</li>
      <li>{login}</li>
      <li>{blog}</li>
    </ul>
  );
};

Infos.defaultProps = {
  data: {}
};

Infos.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    blog: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string
  })
};

const InfosLoading = withLoading(Infos);

export default fetchAPI(InfosLoading);
