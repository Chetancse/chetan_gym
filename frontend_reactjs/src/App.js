import logo from './logo.svg';
import './App.css';
import Main from '../src/component/main'
import Registration from './component/pages/registration';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Bmicalculator from './component/pages/BmiCalculator/bmicalculator';
import Test from './component/pages/BmiCalculator/test';
import Login from './component/pages/LoginPage/Login';

function App() {
  return (
    <div className="App">
        <Router>
      <Routes>
       <Route path="/" element={<Main />} />
      <Route path="/registration"  element={<Registration />} />
      <Route path="/bmicalculator"  element={<Bmicalculator />} />
      <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>  
   {/*  <Bmicalculator/> */}
    {/* <Main/> */}
  {/*  <Registration/>  */}
    </div>
  );
}

export default App;
