import React, {useEffect, useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //for toastify

//nav
import TopBarComponent from "./components/TopBar/TopBarComponent";

//pages
import LoginPage from "./pages/Login/LoginPage";
import DataCollectionPage from "./pages/DataCollection/DataCollectionPage";
import DataObservationPage from "./pages/DataObservation/DataObservationPage";

const App = () => {
  const [token, setToken] = useState(null); //store logged in token

  //check for token upon render
  useEffect(() => {
    const stored = sessionStorage.getItem("token"); //token is key here
    if (stored !== null) {
      setToken(JSON.parse(stored)); //token change would allow them to visit other page
    } else {
      return null; //do nothing
    }
  }, []);

  return (
    <Router>
      {/* nav bar */}
      {token === null ? null : <TopBarComponent />}
      <Switch>
        {/* Home page, exact */}
        <Route path="/" exact>
          {token === null ? <LoginPage /> : <DataObservationPage />}
        </Route>
        <Route path="/collection">
          {token === null ? <LoginPage /> : <DataCollectionPage />}
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
