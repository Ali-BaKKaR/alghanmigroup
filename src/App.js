import "./App.css";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import Hotel from './hotel/hotel'
import Footer from "./footer.js/footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hotels/:hotel" element={<Hotel/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
