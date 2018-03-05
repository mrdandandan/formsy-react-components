// Removes component props that shouldn't be set on the form control.
const cleanProps = (props) => {

    const {

        // These props come from formsy-react
        // https://github.com/christianalfoni/formsy-react/blob/6b167cbfe15a72430ff475a92a70273e67a663f5/src/main.js#L441
        mapping,
        validationErrors,
        onSubmit,
        onValid,
        onValidSubmit,
        onInvalid,
        onInvalidSubmit,
        onChange,
        reset,
        preventExternalInvalidation,
        onSuccess,
        onError,

        // These come from formsy-react, too?
        validationError,
        validations,

        // These props are used by this library.
        addonAfter,
        addonBefore,
        buttonAfter,
        buttonBefore,
        elementWrapperClassName,
        help,
        info,
        footer,
        label,
        options,
        labelClassName,
        layout,
        rowClassName,
        rowLabel,
        validatePristine,
        validateOnSubmit,

        focusOnMount,
        inlineWidth,

        ...rest
    } = props;

    return rest;

}

export { cleanProps };
