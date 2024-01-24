import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Roombooking/Home';
import Hotel from './Roombooking/Hotel';
import List from './Roombooking/List';
import { About } from './Roombooking/Components/About';
import { Contact } from './Roombooking/Components/Contact';
import { Signin } from './Roombooking/Components/Signin';
import { CreateAccount } from './Roombooking/Components/CreateAccount';
import { OwnerDatails } from './Roombooking/Components/OwnerDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotel/:roomName/:roomLocation/:roomRant" element={<Hotel />} />

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