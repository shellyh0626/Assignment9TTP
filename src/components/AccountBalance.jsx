import React, { useState } from "react";
import App from "../App";

const AccountBalance = (props) => {
  //   const [balance, setBalance] = useState(0);

  //   function userBalance() {
  //     setBalance(props.currCreditData - props.currDebitData);
  //   }
  return (
    <div>
      <h1>Account Balance: </h1>
      <p>{props.currCreditData - props.currDebitData}</p>
    </div>
  );
};

export default AccountBalance;
