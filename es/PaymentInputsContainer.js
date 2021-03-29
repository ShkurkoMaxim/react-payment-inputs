import './utils/cardTypes-7a721341.js';
import './utils/validator-0b9ae5a4.js';
import './chunk-9ca66bcf.js';
import './utils/formatter-f7d4fb78.js';
import './utils/index.js';
import 'react';
import usePaymentCard from './usePaymentInputs.js';

function PaymentInputsContainer(props) {
  var paymentInputs = usePaymentCard(props);
  return props.children(paymentInputs);
}

export default PaymentInputsContainer;
