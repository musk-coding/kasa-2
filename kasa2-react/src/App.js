import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Card from "./pages/Card";

import { getRents } from "./services/data.service";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const result = await getRents();
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <header className="container">
        <NavBar />
      </header>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/card/:id" component={Card}></Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
