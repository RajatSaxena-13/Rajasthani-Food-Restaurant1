import logo from './logo.svg';
import './App.css';
import './Component CSS/homeheader.css'
import './Component CSS/homebody.css'
import './Component CSS/storybody.css'
import './Component CSS/menubody.css'
import './Component CSS/menulistbody.css'
import './Component CSS/orderbody.css'
import './Component CSS/ourupdatebody.css'
import './Component CSS/contactbody.css'
import './Component CSS/login.css'
import './Component CSS/reservation.css'
import './Component CSS/register.css'
import './Component CSS/register.css'
import './Component CSS/feature.css'
// import './Component CSS/cart.css'
import './Component CSS/text.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homebody from './Component/homebody';
import Storybody from './Component/storybody';
import Navbar from './navbar';
import Menubody from './Component/menubody';
import Menulistbody from './Component/menulistbody';
import Orderbody from './Component/orderbody';
import Ourupdate from './Component/ourupdate';
import Contactbody from './Component/contactbody';
import Login from './Component/login';
import Resetpassword from './Component/resetpassword';
import Register from './Component/register';
import Reservation from './Component/reservation';
import Feature from './Component/feature';
// import Addtocart from './Component/addtocart';
// import Text from './Component/text';
// import Returnlogin from './Component/returnlogin';

function App() {
  return (
    <HashRouter>
      {/* <Text/> */}
      <Reservation />
      <Register />
      <Resetpassword />
      <Login />
      <Navbar />
      <Routes>
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/homebody" element={<Homebody />} />
        <Route exact path="/storybody" element={<Storybody />} />
        <Route exact path="/menubody" element={<Menubody />} />
        <Route exact path="/menulistbody" element={<Menulistbody />} />
        <Route exact path="/orderbody" element={<Orderbody />} />
        <Route exact path="/ourupdate" element={<Ourupdate />} />
        <Route exact path="/contactbody" element={<Contactbody />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/resetpassword" element={<Resetpassword />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/feature" element={<Feature />} />
        {/* <Route exact path="/cart" element={<Addtocart />} /> */}
        {/* <Route exact path="/text" element={<Text />} /> */}


      </Routes>
    </HashRouter>
  );
}

export default App;
