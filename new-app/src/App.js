import { BrowserRouter,Routes, Route } from "react-router-dom";
 import Home from "./views/Home/Home";
 import About from "./views/About/About";
 import Contact from "./views/Contact/Contact";
 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
