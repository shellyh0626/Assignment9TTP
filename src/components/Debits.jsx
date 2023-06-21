import React, { useState } from "react";
import AccountBalance from "./AccountBalance";

const Debits = (props) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);

  function HandleDescriptionInput(event) {
    setDescriptionInput(event.target.value);
  }
  // console.log(descriptionInput);

  function HandleAmountInput(event) {
    setAmountInput(event.target.value);
  }
  // console.log(amountInput);

  function HandleDebitAmount() {
    props.setCurrDebitData(Number(amountInput) + props.currDebitData);
  }

  return (
    <div className="creditPage">
      <h1>Debit</h1>
      <h3>Add a Debit: </h3>
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
      <p>Debit Amount: {props.currDebitData}</p>
      <AccountBalance
        currCreditData={props.currCreditData}
        currDebitData={props.currDebitData}
      ></AccountBalance>
    </div>
  );
};

export default Debits;
