import { Routes, Route } from "react-router-dom"
import React, {createContext} from 'react'
import './App.css';
// import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import User_Selection from './Components/User_Selection';
import About from './Components/AboutUs.js';
import Feedback from './Components/Feedback.js';
import StudentLogin from './Components/StudentLogin.js';
import EmployeeLogin from './Components/EmployeeLogin.js';
// import FirstPage from "./Components/Welcome";
// import Protected from "./Components/Protected";
import AboutMe from "./Components/AboutMe";
import ErrorPage from "./Components/ErrorPage";
import OrderFood from "./Components/OrderFood";
import WelcomePage from "./Components/Welcome";
import EmpNavbar from "./Components/EmpNavbar";
import EmpWelcomePage from "./Components/EmpWelcome";
import CreateOrder from "./Components/CreateOrder";
import EmpAbout from "./Components/EmpAbout";
import ViewOrders from "./Components/ViewOrders";
import PaymentGateweay from "./Components/PaymentGateway";
import Wallet from "./Components/Wallet";
import DeleteUpdate from "./Components/DeleteUpdate";
import Acknowledgment from "./Components/Acknowlegment";
import SearchUsers from "./Components/SearchUsers";


const App = () => {
  // const [user, setLoginUser] = useState({})
  const UserContext = createContext();
  
  return (
    <>
    <div className="App">
    {/* <Navbar/> */}
    <Routes>
          <Route path="/" element={<User_Selection />} />

          <Route path="/studentLogin" element={<StudentLogin/>} />
          {/* <Route path="/welcome" element= {<Protected Cmp = {WelcomePage}></Protected>}/> */}
          <Route path="/welcome" element = {< WelcomePage/>} />
          <Route path="/order" element={<OrderFood />} />
          {/* <Route path="/aboutme" element={<Protected Cmp = {AboutMe}></Protected>} /> */}
          <Route path="/aboutme" element={<AboutMe />} />

          <Route path="/about" element={<About />} />
          
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/gateway" element={<PaymentGateweay />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/ack" element = {<Acknowledgment/>} />

          <Route path="/empnav" element={<EmpNavbar />} />
          <Route path="/employeeLogin" element={<EmployeeLogin />} />
          <Route path="/empwelcome" element={<EmpWelcomePage />} />
          <Route path="/createorder" element={<CreateOrder />} />
          <Route path="/deleteUpdate" element = {<DeleteUpdate />} />
          <Route path="/vieweorder" element={<ViewOrders />} />
          <Route path="/searchUser" element={<SearchUsers />} />
          <Route path="/empabout" element={<EmpAbout />} />
          
          <Route path="*" element={<ErrorPage />} />

    </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;