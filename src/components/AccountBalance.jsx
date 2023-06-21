import React from "react";

const AccountBalance = (props) => {
  return (
    <div>
      <p>Account Balance: {props.currCreditData - props.currDebitData}</p>
    </div>
  );
};

export default AccountBalance;
