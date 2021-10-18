import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
