import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./routes/products";
import PriceList from "./routes/priceList";
import Faq from "./routes/faq";
import About from "./routes/about";
import NotFound from "./routes/notFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/termekek" element={<Products />} />
            <Route path="/arlista" element={<PriceList />} />
            <Route path="/gyik" element={<Faq />} />
            <Route path="/rolam" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
