import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/appointment/:doctorId">
              <Appointment></Appointment>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
