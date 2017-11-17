import React from 'react';
import PropTypes from 'prop-types';

const Meta = props => <p
    style={{margin: 0}}
    dangerouslySetInnerHTML={{__html: props.text}}
/>;

Meta.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Meta;
