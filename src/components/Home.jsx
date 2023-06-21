import React from "react";
import AccountBalance from "./AccountBalance";

function Home(props) {
  return (
    <div className="homePage">
      <h1>Account details</h1>
      <AccountBalance
        currCreditData={props.currCreditData}
        currDebitData={props.currDebitData}
      ></AccountBalance>
      <p>Debit Amount: {props.currDebitData}</p>
      <p>Credit Amount: {props.currCreditData}</p>
    </div>
  );
}

export default Home;
