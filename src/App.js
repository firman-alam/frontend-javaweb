import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-router-dom";
import { login } from "./features/Auth";

import Account from "./pages/Account/Account";
import Booking from "./pages/Booking/Booking";
import Payment from "./pages/Payment/Payment";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import Home from "./pages/Homepage/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/Register" element={<SignUp />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Booking" element={<Booking />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/Profile" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
