import React, { useState } from "react";
import AccountBalance from "./AccountBalance";

const Credits = (props) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);

  function HandleDescriptionInput(event) {
    setDescriptionInput(event.target.value);
  }
  console.log(descriptionInput);

  function HandleAmountInput(event) {
    setAmountInput(event.target.value);
  }
  console.log(amountInput);

  function HandleDebitAmount() {
    props.setCurrCreditData(Number(amountInput) + props.currCreditData);
  }

  return (
    <div className="creditPage">
      <h1>Credit</h1>
      <h3>Add a Credit: </h3>
      <p>Description:</p>
      <input
        class="textbox-style"
        type="text"
        onChange={HandleDescriptionInput}
      />
      <p>Amount:</p>
      <input class="textbox-style" type="text" onChange={HandleAmountInput} />
      <br />
      <br />
      <button className="btn-style" onClick={HandleDebitAmount}>
        Add
      </button>
      <br />
      <p>Credit Amount: {props.currCreditData}</p>
      <AccountBalance
        currCreditData={props.currCreditData}
        currDebitData={props.currDebitData}
      ></AccountBalance>
    </div>
  );
};

export default Credits;
