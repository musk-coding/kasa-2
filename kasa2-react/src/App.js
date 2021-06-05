import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { About, Home, Card, NotFound } from "./pages";

function App() {
  return (
    <Router>
      <header className="container">
        <NavBar />
      </header>
      <div className="container page">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/card/:id" component={Card}></Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
