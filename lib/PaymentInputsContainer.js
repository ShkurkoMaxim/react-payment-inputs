'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./utils/cardTypes-346541cb.js');
require('./utils/validator-df336dc4.js');
require('./chunk-3121e873.js');
require('./utils/formatter-59e57f2e.js');
require('./utils/index.js');
require('react');
var usePaymentInputs = require('./usePaymentInputs.js');

function PaymentInputsContainer(props) {
  var paymentInputs = usePaymentInputs.default(props);
  return props.children(paymentInputs);
}

exports.default = PaymentInputsContainer;
