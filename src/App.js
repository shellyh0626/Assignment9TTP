import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

function App() {
  const [currCreditData, setCurrCreditData] = useState(0);
  const [currDebitData, setCurrDebitData] = useState(0);
  const [balance, setBalance] = useState(0);
  // const [updatedDebitData, setUpdatedDebitData] = useState([]);
  // const [updatedCreditData, setUpdatedCreditData] = useState([]);
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
  console.log(currCreditData);
  console.log(currDebitData);

  const accountBalance = () => {
    setBalance(currCreditData - currDebitData);
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userProfile">User Profile</Link>
            </li>
            <li>
              <Link to="/Debits">Debits</Link>
            </li>
            <li>
              <Link to="/Credits">Credits</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile/*" element={<UserProfile />} />
          <Route
            path="/Debits/*"
            element={
              <Debits
                currDebitData={currDebitData}
                setCurrDebitData={setCurrDebitData}
                currCreditData={currCreditData}
                setCurrCreditData={setCurrCreditData}
                balance={balance}
                // setBalance={setBalance}
              />
            }
          />
          <Route
            path="/Credits/*"
            element={
              <Credits
                currCreditData={currCreditData}
                setCurrCreditData={setCurrCreditData}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
