
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Pages/Authentication/Signin';
import SignUp from './Pages/Authentication/Signup';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
