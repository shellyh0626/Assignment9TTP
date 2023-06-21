import React, { useState } from "react";
import axios from "axios";
import AccountBalance from "./AccountBalance";

const Debits = (props) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const [printDebits, setPrintDebits] = useState([""]);
  // const data = Array.from(props.debitData);
  // const [storeInput, setStoreInput] = useState([]);

  function AddDebit() {
    let description = descriptionInput;
    let amount = amountInput;
    // let newId = String(amount1).substring(0, 1) + description1.substring(0, 2);
    let date = new Date();
    let date1 = String(date);
    let newItem = {
      amount: amount,
      date: date1,
      description: description,
      // id: newId,
    };
    // props.setDebitData([...props.debitData, newItem]);
    props.setCurrDebitData(newItem);
    // props.setBalance(props.balance - amount1);
  }

  // const AddDebit = (e) => {
  //   const newDebits = [...printDebits];

  //   newDebits.push({ amountInput, descriptionInput });

  //   setPrintDebits(newDebits);
  //   // props.SetBalance(localAmount + balanceFromApi);
  //   e.preventDefault();
  // };

  function HandleDescriptionInput(event) {
    setDescriptionInput(event.target.value);
  }
  console.log(descriptionInput);

  function HandleAmountInput(event) {
    setAmountInput(event.target.value);
  }
  console.log(amountInput);

  return (
    <div>
      <h1>Debit</h1>
      <h5>Add a Debit: </h5>
      <p>Description</p>
      <input type="text" onChange={HandleDescriptionInput} />
      <p>Amount</p>
      <input type="text" onChange={HandleAmountInput} />
      <br />
      {/* onClick={HandleAddDebit} */}
      {/* <AccountBalance
        currDebitData={props.currDebitData}
        setCurrDebitData={props.setCurrDebitData}
        currCreditData={props.currCreditData}
        setCurrCreditData={props.setCurrCreditData}
      ></AccountBalance> */}
      <h1>{props.balance}</h1>
      <div>
        <button onClick={AddDebit}>Add Debit</button>
        {/* <h4>Description: {descriptionInput}</h4>
        <h4>Amount: {amountInput}</h4>
        <h4>Date:</h4> */}
        {/* {props.setCurrCreditData.map((item) => {
          return (
            // <ul key={item.id}>
            <ul>
              <li>
                <b>Item Name:</b> {item.description}
              </li>
              <li>
                <b>Date Paid:</b> {item.date1.substring(0, 9)}
              </li>
              <li>
                <b>Item Amount:</b> {"$" + item.amount}
              </li>
            </ul>
          );
        })} */}
      </div>
    </div>
  );
};

export default Debits;
