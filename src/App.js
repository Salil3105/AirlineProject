
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Pages/Authentication/Signin';
import SignUp from './Pages/Authentication/Signup';
import Home from './Pages/Home/Home';
import FlightDetails from './Pages/FlightDetails/FlightDetails';
import BookNow from './Pages/BookNow/BookNow';
import PaymentScreen from './Pages/PaymentScreens/PaymentScreen';

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/flightDetails/bookNow/payNow' element={<PaymentScreen />} />
          <Route path='/flightDetails/bookNow' element={<BookNow />} />
          <Route path='/flightDetails' element={<FlightDetails />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
