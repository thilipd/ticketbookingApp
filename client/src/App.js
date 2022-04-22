
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Signup from './screens/Signupwindow';
import Login from './screens/Loginwindow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Homescreen />} />
          <Route path='/home' element={<Homescreen />} />
          <Route path='/book/:id' element={<Bookingscreen />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
