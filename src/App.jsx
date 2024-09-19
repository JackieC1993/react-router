import Footer from "./components/common/footer.jsx";
import Header from "./components/common/header";
import Nav from "./components/common/nav";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Newsletter from "./components/pages/newsletter";
import ProductList from "./components/products/productList";
import Product from "./components/products/product";
import ProductView from "./components/products/productview.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import lamps from "./data/lamps.json";
import candles from "./data/candles.json";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route
                path="/lamps/"
                element={<ProductList products={lamps} type={"Lamps"} />}
              />
              <Route
                path="/candles/"
                element={<ProductList products={candles} type={"Candles"} />}
              />
              <Route
                path="/lamps/:id"
                element={<Product products={lamps} type={"Lamps"} />}
              />
              <Route
                path="/candles/:id"
                element={<Product products={candles} type={"Candles"} />}
              />
              <Route path="/floor" element={<ProductView type="floor" />} />
              <Route path="/ceiling" element={<ProductView type="ceiling" />} />
              <Route path="/table" element={<ProductView type="table" />} />
              <Route
                path="/decorative"
                element={<ProductView type="decorative" />}
              />
              <Route
                path="/flameless"
                element={<ProductView type="flameless" />}
              />
              <Route
                path="/celebratory"
                element={<ProductView type="celebratory" />}
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
