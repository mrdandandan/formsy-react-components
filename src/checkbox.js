/*jshint node:true */

'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var Formsy = require('formsy-react');
var ComponentMixin = require('./mixins/component');
var Row = require('./row');
var propUtilities = require('./prop-utilities');

var Checkbox = createReactClass({

    mixins: [Formsy.Mixin, ComponentMixin],

    getDefaultProps: function () {
        return {
            label: '',
            rowLabel: '',
            value: false
        };
    },

    changeValue: function (event) {
        var target = event.currentTarget;
        this.setValue(target.checked);
        this.props.onChange(this.props.name, target.checked);
    },

    renderElement: function () {
        return (
            <div className="form-group">
                <div className="checkbox-group">
                    <input
                        ref={(c) => this.element = c}
                        {...propUtilities.cleanProps(this.props)}
                        id={this.getId()}
                        type="checkbox"
                        checked={this.getValue() === true}
                        onChange={this.changeValue}
                        disabled={this.isFormDisabled() || this.props.disabled}
                    />
                    <label htmlFor={this.getId()}>
                        {this.props.label}
                    </label>
                </div>
            </div>
        );
    },

    render: function () {

        var element = this.renderElement();

        if (this.getLayout() === 'elementOnly') {
            return element;
        }

        return (
            <div>
                {this.renderInfo('0 0 10px')}
                {element}
                {this.renderHelp('10px 0 0')}
                {this.renderErrorMessage()}
                {/*<Row*/}
                {/*{...this.getRowProperties()}*/}
                {/*label={this.props.rowLabel}*/}
                {/*htmlFor={this.getId()}*/}
                {/*>*/}
                {/*{element}*/}
                {/*{this.renderHelp()}*/}
                {/*{this.renderErrorMessage()}*/}
                {/*</Row>*/}
                {this.renderFooter()}
            </div>
        );
    }
});

module.exports = Checkbox;
