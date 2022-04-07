import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Services from './components/Service';
import 'bootstrap/dist/css/bootstrap.min.css';




//QRcScanning
import Register_Mob from './components/Register_Mob'
import ActiveTab_Mob from './components/ActiveTab_Mob'
import ContactOwnerVeh_Mob from './components/ContactOwnerVeh_Mob'
import OtpVeri__Mob from './components/OtpVeri__Mob'
import Qrcode_Mob from './components/Qrcode_Mob'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Qrcode_Mob} />
      <Route path='/services' component={Services} />
    

      <Route path="/Register_Mob" component={Register_Mob}/>
            <Route path="/ActiveTab_Mob" component={ActiveTab_Mob}/>
            <Route path="/ContactOwnerVeh_Mob" component={ContactOwnerVeh_Mob}/>
            <Route path="/OtpVeri__Mob" component={OtpVeri__Mob}/>
            <Route path="/Qrcode_Mob" component={Qrcode_Mob}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
