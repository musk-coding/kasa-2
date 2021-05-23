import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
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
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
