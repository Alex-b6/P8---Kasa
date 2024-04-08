import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Host from "./pages/Host";
import Error from './pages/Error';

import BaseDataContext from "./Context/BaseDataContext";
import baseData from "./assets/base.json";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
      <BaseDataContext.Provider value={baseData}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/host/:id" element={<Host />} />
                  <Route path="/host" element={<Host />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<Error />} />
              </Routes>
              <Footer/>
          </BrowserRouter>
      </BaseDataContext.Provider>
  );
};

export default App
