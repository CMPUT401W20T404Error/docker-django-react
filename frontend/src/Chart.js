// Chart.js

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var createReactClass = require('create-react-class');
var d3Chart = require('./d3Chart');

var Chart = createReactClass({
  propTypes: {
    data: PropTypes.array,
    domain: PropTypes.object
  },

  componentDidMount: function() {
    var el = this.getDOMNode();
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: function() {
    var el = this.getDOMNode();
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  },

  componentWillUnmount: function() {
    var el = this.getDOMNode();
    d3Chart.destroy(el);
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  }
});
