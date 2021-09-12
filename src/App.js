import React, {useEffect, useState} from "react";
import './App.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import default style
import "rsuite/lib/styles/index.less"; // or
//nav
import TopBarComponent from './components/TopBar/TopBarComponent';


//pages
import LoginPage from './pages/Login/LoginPage';
import DataCollectionPage from './pages/DataCollection/DataCollectionPage';
import DataObservationPage from './pages/DataObservation/DataObservationPage';



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
          <LoginPage />
        </Route>
        <Route path="/collection">
          {token === null ? <LoginPage /> : <DataCollectionPage />}
        </Route>
        <Route path="/observation">
          {token === null ? <LoginPage /> : <DataObservationPage />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
