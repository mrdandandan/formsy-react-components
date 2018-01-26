import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import Formsy from 'formsy-react';
import ParentContextMixin from './mixins/parent-context';

var Form = createReactClass({

    mixins: [ParentContextMixin],

    propTypes: {
        children: PropTypes.node
    },

    render() {
        let formsyProps = Object.assign({}, this.props);
        delete formsyProps.layout;
        delete formsyProps.validateOnSubmit;
        delete formsyProps.validatePristine;
        delete formsyProps.rowClassName;
        delete formsyProps.labelClassName;
        delete formsyProps.elementWrapperClassName;
        return (
            <Formsy.Form
                className={this.getLayoutClassName()}
                {...formsyProps}
                ref="formsy"
            >
                {this.props.children}
            </Formsy.Form>
        );
    }

});

module.exports = Form;
