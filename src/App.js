import Header from "./components/Header";
import Home from "./components/Home";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
