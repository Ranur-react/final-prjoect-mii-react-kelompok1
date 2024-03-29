import logo from './logo.svg';
import './App.css';
import PortoRanur from './page/portofolio/PortoRanur';

import NavLayout from './page/portofolio/NavLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortoVery from './page/portofolio/PortoVery';
function App() {
  return (
    <div>
      {/* <PortoRanur/> */}
      {/* <NavLayout/> */}
      <Router>
        <NavLayout />
        <Routes>
          <Route excat path='/' element={<PortoRanur />} />
          <Route path='/very' element={<PortoVery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
