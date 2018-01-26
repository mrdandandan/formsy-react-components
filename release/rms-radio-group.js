/*jshint node:true */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var Formsy = require('formsy-react');
var ComponentMixin = require('./mixins/component');
var Row = require('./row');

var RadioGroup = createReactClass({
    displayName: 'RadioGroup',


    mixins: [Formsy.Mixin, ComponentMixin],

    propTypes: {
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['inline', 'stacked']),
        options: PropTypes.array.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return {
            type: 'stacked',
            label: '',
            help: null,
            info: null,
            footer: null
        };
    },

    changeRadio: function changeRadio(event) {
        var value = event.currentTarget.value;
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    renderElement: function renderElement() {
        var _this = this;

        var controls = this.props.options.map(function (radio, key) {
            var checked = _this.getValue() === radio.value;
            var disabled = _this.isFormDisabled() || radio.disabled || _this.props.disabled;
            var className = 'radio-group' + (disabled ? ' disabled' : '');
            if (_this.props.type === 'inline') {
                return React.createElement(
                    'div',
                    { className: className + ' col-sm-12 col-md-2', key: key },
                    React.createElement('input', {
                        ref: function ref(c) {
                            return _this['element-' + key] = c;
                        },
                        checked: checked,
                        id: radio.id,
                        type: 'radio',
                        value: radio.value,
                        onChange: _this.changeRadio,
                        disabled: disabled
                    }),
                    React.createElement(
                        'label',
                        { htmlFor: radio.id },
                        radio.label
                    )
                );
            }
            return React.createElement(
                'div',
                { className: className, key: key },
                React.createElement('input', {
                    ref: function ref(c) {
                        return _this['element-' + key] = c;
                    },
                    checked: checked,
                    id: radio.id,
                    type: 'radio',
                    value: radio.value,
                    onChange: _this.changeRadio,
                    disabled: disabled
                }),
                React.createElement(
                    'label',
                    { htmlFor: radio.id },
                    radio.label
                )
            );
        });
        if (this.props.type === 'inline') {
            return React.createElement(
                'div',
                { className: 'row' },
                controls
            );
        }
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
            this.renderInfo(),
            this.renderElement(),
            this.renderFooter(),
            this.renderHelp(),
            this.renderErrorMessage()
        );
    }
});

module.exports = RadioGroup;