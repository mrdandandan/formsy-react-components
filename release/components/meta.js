'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function Meta(props) {
    return _react2.default.createElement('p', {
        style: { margin: 0 },
        dangerouslySetInnerHTML: { __html: props.text }
    });
};

Meta.propTypes = {
    text: _propTypes2.default.string.isRequired
};

exports.default = Meta;