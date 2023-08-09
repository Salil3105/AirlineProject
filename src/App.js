
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Pages/Authentication/Signin';
import SignUp from './Pages/Authentication/Signup';
import Home from './Pages/Home/Home';
import FlightDetails from './Pages/FlightDetails/FlightDetails';
import BookNow from './Pages/BookNow/BookNow';
import PaymentScreen from './Pages/PaymentScreens/PaymentScreen';
import TicketScreen from './Pages/TicketScreen/TicketScreen';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/ticketDetails' element={<TicketScreen />} />
          <Route path='/flightDetails/bookNow/payNow' element={<PaymentScreen />} />
          <Route path='/flightDetails/bookNow' element={<BookNow />} />
          <Route path='/flightDetails' element={<FlightDetails />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
