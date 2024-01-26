import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Home';
import Hotel from './Hotel';
import List from './List';
import { About } from './About';
import { Contact } from './Contact';
import { Signin } from './Signin';
import { CreateAccount } from './CreateAccount';
import { OwnerDatails } from './OwnerDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotel/:roomName/:roomLocation/:roomRant" element={<Hotel/>} />
        <Route path="/hotelid" element={<List/>}></Route>
        <Route path='/AboutUs' element={<About/>}></Route>
        <Route path="/ContactUs" element={<Contact/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>    
        <Route path="/createAccount" element={<CreateAccount/>}></Route>
        <Route path="/ownerDetails" element={<OwnerDatails/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
