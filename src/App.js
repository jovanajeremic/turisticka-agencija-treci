import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigacija from "./komponente/Navigacija";
import Pocetna from "./stranice/Pocetna";
import OMeni from "./stranice/OMeni";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navigacija />
          <Routes>
            <Route path="/" element={<Pocetna />}></Route>
            <Route path="/about" element={<OMeni />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
