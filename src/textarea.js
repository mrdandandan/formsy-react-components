/*jshint node:true */

'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var Formsy = require('formsy-react');
var ComponentMixin = require('./mixins/component');
var Row = require('./row');
var propUtilities = require('./prop-utilities');

var Textarea = createReactClass({

    mixins: [Formsy.Mixin, ComponentMixin],

    propTypes: {
        rows: PropTypes.number,
        cols: PropTypes.number,
        focusOnMount: PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            rows: 3,
            cols: 0, // React doesn't render the cols attribute if it is zero
            focusOnMount: false
        };
    },

    componentDidMount: function() {
        if(this.props.focusOnMount) {
            this.element.focus();
        }
    },

    changeValue: function(event) {
        var value = event.currentTarget.value;
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    renderElement: function() {
        return (
            <textarea
                ref={(c) => this.element = c}
                className="form-control"
                {...propUtilities.cleanProps(this.props)}
                id={this.getId()}
                value={this.getValue()}
                onChange={this.changeValue}
                disabled={this.isFormDisabled() || this.props.disabled}
            ></textarea>
        );
    },

    render: function() {

        if (this.getLayout() === 'elementOnly') {
            return this.renderElement();
        }

        return (
            <Row
                {...this.getRowProperties()}
                htmlFor={this.getId()}
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

module.exports = Textarea;
