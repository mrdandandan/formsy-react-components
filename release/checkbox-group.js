/*jshint node:true */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var Formsy = require('formsy-react');
var ComponentMixin = require('./mixins/component');
var Row = require('./row');

var CheckboxGroup = createReactClass({
    displayName: 'CheckboxGroup',


    mixins: [Formsy.Mixin, ComponentMixin],

    propTypes: {
        name: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return {
            label: '',
            help: null,
            info: null,
            footer: null
        };
    },

    changeCheckbox: function changeCheckbox() {
        var value = [];
        this.props.options.forEach(function (option, key) {
            if (this['element-' + key].checked) {
                value.push(option.value);
            }
        }.bind(this));
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    renderElement: function renderElement() {
        var _this = this;

        var controls = this.props.options.map(function (checkbox, key) {
            var checked = _this.getValue().indexOf(checkbox.value) !== -1;
            var disabled = _this.isFormDisabled() || checkbox.disabled || _this.props.disabled;
            return React.createElement(
                'div',
                { className: 'checkbox', key: key },
                React.createElement(
                    'label',
                    null,
                    React.createElement('input', {
                        ref: function ref(c) {
                            return _this['element-' + key] = c;
                        },
                        checked: checked,
                        type: 'checkbox',
                        value: checkbox.value,
                        onChange: _this.changeCheckbox,
                        disabled: disabled
                    }),
                    ' ',
                    checkbox.label
                )
            );
        });
        return controls;
    },

    render: function render() {

        if (this.getLayout() === 'elementOnly') {
            return React.createElement(
                'div',
                null,
                this.renderElement()
            );
        }

        return React.createElement(
            Row,
            _extends({}, this.getRowProperties(), {
                fakeLabel: true
            }),
            this.renderElement(),
            this.renderHelp(),
            this.renderErrorMessage()
        );
    }
});

module.exports = CheckboxGroup;