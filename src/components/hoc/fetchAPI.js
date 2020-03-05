import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const fetchAPI = MyComponent =>
  class fetchAPIHOC extends Component {
    state = {
      data: false
    };

    static defaultProps = {
      apiURL: ''
    };

    static propTypes = {
      apiURL: PropTypes.string
    };

    componentDidMount() {
      try {
        axios.get(this.props.apiURL).then(res => {
          const data = res.data;

          this.setState({ data });
        });
      } catch (error) {
        throw new Error(error);
      }
    }

    render() {
      return <MyComponent data={this.state.data} title={this.props.title} />;
    }
  };
