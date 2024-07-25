import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SwipeButton from './SwipeButton';
import Chats from './Chats';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={<div>
            <Header backBtn='/' /> <Chats />
          </div>}>  
          </Route>
          <Route path='/' element={<div>
            <Header /> <TinderCards /> <SwipeButton />
            </div>}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
