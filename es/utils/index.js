import { b as cardTypes } from './cardTypes-7a721341.js';
import { a as validator } from './validator-0b9ae5a4.js';
import '../chunk-9ca66bcf.js';
import { a as formatter } from './formatter-f7d4fb78.js';

var BACKSPACE_KEY_CODE = 'Backspace';
var ENTER_KEY_CODE = 'Enter';
var isHighlighted = function isHighlighted() {
  return (window.getSelection() || {
    type: undefined
  }).type === 'Range';
};
var utils = {
  cardTypes: cardTypes,
  formatter: formatter,
  validator: validator,
  BACKSPACE_KEY_CODE: BACKSPACE_KEY_CODE,
  ENTER_KEY_CODE: ENTER_KEY_CODE,
  isHighlighted: isHighlighted
};

export default utils;
export { BACKSPACE_KEY_CODE, ENTER_KEY_CODE, isHighlighted };
