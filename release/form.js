'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _parentContext = require('./mixins/parent-context');

var _parentContext2 = _interopRequireDefault(_parentContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = (0, _createReactClass2.default)({
    displayName: 'Form',


    mixins: [_parentContext2.default],

    propTypes: {
        children: _propTypes2.default.node
    },

    render: function render() {
        var formsyProps = Object.assign({}, this.props);
        delete formsyProps.layout;
        delete formsyProps.validateOnSubmit;
        delete formsyProps.validatePristine;
        delete formsyProps.rowClassName;
        delete formsyProps.labelClassName;
        delete formsyProps.elementWrapperClassName;
        return _react2.default.createElement(
            _formsyReact2.default.Form,
            _extends({
                className: this.getLayoutClassName()
            }, formsyProps, {
                ref: 'formsy'
            }),
            this.props.children
        );
    }
});

module.exports = Form;