/*jshint node:true */

'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var Formsy = require('formsy-react');
var ComponentMixin = require('./mixins/component');
var Row = require('./row');

var RadioGroup = createReactClass({

    mixins: [Formsy.Mixin, ComponentMixin],

    propTypes: {
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['inline', 'stacked']),
        options: PropTypes.array.isRequired
    },

    getDefaultProps: function () {
        return {
            type: 'stacked',
            label: '',
            help: null,
            info: null,
            footer: null
        };
    },

    changeRadio: function (event) {
        var value = event.currentTarget.value;
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    renderElement: function () {
        const controls = this.props.options.map((radio, key) => {
            let checked = (this.getValue() === radio.value);
            let disabled = this.isFormDisabled() || radio.disabled || this.props.disabled;
            let className = 'radio-group' + (disabled ? ' disabled' : '');
            if (this.props.type === 'inline') {
                return (
                    <div className={`${className} col-sm-12 col-md-2}`} key={key}>
                        <input
                            ref={(c) => this['element-' + key] = c}
                            checked={checked}
                            id={radio.id}
                            type="radio"
                            value={radio.value}
                            onChange={this.changeRadio}
                            disabled={disabled}
                        />
                        <label htmlFor={radio.id}>
                            {radio.label}
                        </label>
                    </div>
                );
            }
            return (
                <div className={className} key={key}>
                    <input
                        ref={(c) => this['element-' + key] = c}
                        checked={checked}
                        id={radio.id}
                        type="radio"
                        value={radio.value}
                        onChange={this.changeRadio}
                        disabled={disabled}
                    />
                    <label htmlFor={radio.id}>
                        {radio.label}
                    </label>
                </div>
            );
        });
        if(this.props.type === 'inline') {
            return <div className="row">
                {controls}
            </div>
        }
        return controls;
    },

    render: function () {

        if (this.getLayout() === 'elementOnly') {
            return (
                <div>{this.renderElement()}</div>
            );
        }

        return (
            <Row
                {...this.getRowProperties()}
                fakeLabel={true}
            >
                {this.renderInfo()}
                {this.renderElement()}
                {this.renderFooter()}
                {this.renderHelp()}
                {this.renderErrorMessage()}
            </Row>
        );
    }
});

module.exports = RadioGroup;
