import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import AccountBalance from "./components/AccountBalance";

function App() {
  const [currCreditData, setCurrCreditData] = useState(0);
  const [currDebitData, setCurrDebitData] = useState(0);

  useEffect(() => {
    async function getCreditInfo() {
      const result = await axios.get(
        `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`
      );
      setCurrCreditData(result.data);
    }
    getCreditInfo();

    async function getDebitInfo() {
      const result = await axios.get(
        `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
      );
      setCurrDebitData(result.data);
    }
    getDebitInfo();
  }, []);
  // console.log(currCreditData);
  // console.log(currDebitData);

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="nav-bar">
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="listContent">
              <Link to="/Debits">Debits</Link>
            </li>
            <li className="listContent">
              <Link to="/Credits">Credits</Link>
            </li>
          </ul>
        </nav>
        <br />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                currDebitData={currDebitData}
                setCurrDebitData={setCurrDebitData}
                currCreditData={currCreditData}
                setCurrCreditData={setCurrCreditData}
              />
            }
          />
          <Route
            path="/Debits/*"
            element={
              <Debits
                currDebitData={currDebitData}
                setCurrDebitData={setCurrDebitData}
                currCreditData={currCreditData}
              />
            }
          />
          <Route
            path="/Credits/*"
            element={
              <Credits
                currCreditData={currCreditData}
                setCurrCreditData={setCurrCreditData}
                currDebitData={currDebitData}
              />
            }
          />
          <Route
            path="/AccountBalance/*"
            element={
              <AccountBalance
                currCreditData={currCreditData}
                currDebitData={currDebitData}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
