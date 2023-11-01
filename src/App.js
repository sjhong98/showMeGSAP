import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './main.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;