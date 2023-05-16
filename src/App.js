import { HashRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './MainLogin';
import RegistrationForm from './UserForm';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import UserLogin from './components/UserLogin';
import ReflectArray from './components/ReflectArray';
import AdminTopBar from './components/AdminTopBar';
import AdminSidebar from './components/AdminSideBar';
import { useState } from 'react';
import uibuilder from 'node-red-contrib-uibuilder/front-end/uibuilderfe';
import TimeMgt from './components/TimeMgt';
import UserHome from './components/UserHome';
import UserTopBar from './components/UserTopBar';
import UserSidebar from './components/UserSideBar';



export function reloadWithHash(hash) {
  window.location.href = window.location.href.split('#')[0] + '#' + hash;
  window.location.reload(true);
}


function App() {
  const [parkings, setPrakings] = useState([]);
//   const [isUser, setIsUser]   = useState(false);

//   var userType = localStorage.getItem("userType");
//   console.log(userType);
  
// if (userType === "admin"){
//   setIsAdmin(true);
// }else if (userType === "user"){
//   setIsUser(true);
// }


uibuilder.start();

uibuilder.onChange('msg', (msg) => {
  console.log(msg)
  // console.log(msg.topic)
  switch (msg.topic) {
    case "loginAdmin":
      console.log(msg.payload);
      var login = msg.payload.login;
      console.log(login);
      if (login == "success"){
        localStorage.setItem('user', msg.payload.userVal);
        reloadWithHash('/admin-home')
      }else{
        alert("Invalid User Name or Password")
      }
      break;
      case "loginUser":
      console.log(msg.payload);
      var login = msg.payload.login;
      console.log(login);
      if (login == "success"){
        localStorage.setItem('user', msg.payload.userVal);
        reloadWithHash('/user-home')
      }else{
        alert("Invalid User Name or Password")
      }
      break;
    case "loadParkings":
      setPrakings(prevUsers => msg.payload);
      break;
    // case "loadDigitalinputs":
    //   setDinputs(prevData => msg.payload);
    //   break;
    // case "loadDigitaloutputs":
    //   setDoutputs(prevData => msg.payload);
    //   break;
    // case "loadCm1":
    //   setCm1(prevData => msg.payload);;
    //   break;
    // case "loadCm2":
    //   setCm2(prevData => msg.payload);
    //   break;
    // case "loadV":
    //   setVm(prevData => msg.payload);
    //   break;
    // case "loadHistroy":
    //   setHistroy(prevData => msg.payload);
    //   console.log(msg.payload);
    //   break;
    // case "loadSettings":
    //   setSettings(prevData => msg.payload[0]);
    //   console.log(msg.payload);
    //   break;
    // case "timestamp":
    //   setTime(prevData => msg.payload);
    //   // console.log(msg.payload);
    //   // console.log("Time is",time)
    //   break;
    default:
      //color = "unknown";
      break;
  }
});


const texts = ['Parking 1', 'Parking 2', 'Parking 3', 'Parking 4', 'Parking 5', 'Parking 6', 'Parking 7', 'Parking 8', 'Parking 9', 'Parking 10'];
var usr = localStorage.getItem('user')
console.log(usr);

  return (
    <HashRouter>
      {usr == 'admin' ? <AdminTopBar /> : null}
      {usr == 'admin' ? <AdminSidebar /> : null}
      {usr == 'user' ? <UserTopBar/> : null}
      {usr == 'user' ? <UserSidebar/> : null}
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/user-registration" element={<RegistrationForm />} />
        <Route path="/user-login" element={<UserLogin/>} />
        <Route path="/admin-login" element={ usr !="admin" ? <AdminLogin/> : <AdminHome/>} />
        <Route path="/admin-home" element={<AdminHome/>} />
        <Route path="/admin-slot-mgt" element={<ReflectArray parkings = {parkings} />} />
        <Route path="/admin-time-mgt" element={<TimeMgt/>} />
        <Route path="/user-login" element={ usr !="user" ? <UserLogin/> : <UserHome/>} />
        <Route path="/user-home" element={<UserHome/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;