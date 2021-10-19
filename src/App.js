import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

import AuthProvider from "./context/AuthProvider";
import Department from "./components/Department/Department";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/department">
              <Department></Department>
              <Footer></Footer>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/appointment/:doctorId">
              <Appointment></Appointment>
              <Footer></Footer>
            </PrivateRoute>
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
