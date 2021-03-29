import { f as _taggedTemplateLiteral, e as _objectWithoutProperties, g as _extends } from './chunk-9ca66bcf.js';
import React from 'react';
import styled, { css } from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var FieldWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n\n  & {\n    ", ";\n  }\n\n  ", ";\n"])), function (props) {
  return props.hasErrored && props.styles.fieldWrapper ? props.styles.fieldWrapper.errored : undefined;
}, function (props) {
  return props.styles.fieldWrapper ? props.styles.fieldWrapper.base : undefined;
});
var InputWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: white;\n  border: 1px solid #bdbdbd;\n  box-shadow: inset 0px 1px 2px #e5e5e5;\n  border-radius: 0.2em;\n  display: flex;\n  height: 2.5em;\n  padding: 0.4em 0.6em;\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n\n  & input {\n    border: unset;\n    margin: unset;\n    padding: unset;\n    outline: unset;\n    font-size: inherit;\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n\n  & svg {\n    margin-right: 0.6em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#cardNumber {\n    width: 11em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#expiryDate {\n    width: 4em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#cvc {\n    width: 2.5em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#zip {\n    width: 4em;\n    & {\n      ", ";\n    }\n  }\n\n  ", ";\n"])), function (props) {
  return props.hasErrored && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        border-color: #c9444d;\n        box-shadow: #c9444d 0px 0px 0px 1px;\n        ", ";\n      "])), function (props) {
    return props.styles.inputWrapper && props.styles.inputWrapper.errored;
  });
}, function (props) {
  return props.focused && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        border-color: #444bc9;\n        box-shadow: #444bc9 0px 0px 0px 1px;\n        ", ";\n      "])), function (props) {
    return props.styles.inputWrapper && props.styles.inputWrapper.focused;
  });
}, function (props) {
  return props.hasErrored && props.styles.input ? props.styles.input.errored : undefined;
}, function (props) {
  return props.styles.input && props.styles.input.base;
}, function (props) {
  return props.styles.cardImage;
}, function (props) {
  return props.styles.input && props.styles.input.cardNumber;
}, function (props) {
  return props.styles.input && props.styles.input.expiryDate;
}, function (props) {
  return props.styles.input && props.styles.input.cvc;
}, function (props) {
  return props.styles.input && props.styles.input.zip;
}, function (props) {
  return props.styles.inputWrapper ? props.styles.inputWrapper.base : undefined;
});
var ErrorText = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #c9444d;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n\n  & {\n    ", ";\n  }\n"])), function (props) {
  return props.styles.errorText ? props.styles.errorText.base : undefined;
});

function PaymentInputsWrapper(props) {
  var children = props.children,
      error = props.error,
      errorTextProps = props.errorTextProps,
      focused = props.focused,
      inputWrapperProps = props.inputWrapperProps,
      isTouched = props.isTouched,
      styles = props.styles,
      restProps = _objectWithoutProperties(props, ["children", "error", "errorTextProps", "focused", "inputWrapperProps", "isTouched", "styles"]);

  var hasErrored = error && isTouched;
  return /*#__PURE__*/React.createElement(FieldWrapper, _extends({
    hasErrored: hasErrored,
    styles: styles
  }, restProps), /*#__PURE__*/React.createElement(InputWrapper, _extends({
    focused: focused,
    hasErrored: hasErrored,
    styles: styles
  }, inputWrapperProps), children), hasErrored && /*#__PURE__*/React.createElement(ErrorText, _extends({
    styles: styles
  }, errorTextProps), error));
}

PaymentInputsWrapper.defaultProps = {
  styles: {}
};

export default PaymentInputsWrapper;
