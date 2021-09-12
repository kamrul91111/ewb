import React, {useState, useEffect} from "react";
import "./loginpage.css";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "../../api/fire.js";
//lottie
import Lottie from "react-lottie-player";
import Loadanim from "../../assets/lottie/75839-jump-through-4-hoops.json";

//image
import Logo from "../../assets/ewb.png";

// firebase
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

//style component for mui
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 50,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#1774a9",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // text color for textField
  input: {
    color: "white",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null); //stored access token
  const [loading, setLoading] = useState(false);

  // to clean the states
  useEffect(() => {
    //cleanup
    return () => {
      setEmail('')
      setPassword('')
      setToken(null)
      setLoading(false)
    };
  }, []);
  // grab auth function
  const auth = getAuth();

  // login function
  const login = () => {
    setLoading(true); //start loading
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log(res.user.accessToken);
        setToken(res.user.accessToken);
        setLoading(false); //stop the indicator
      })
      .then(() => window.location.reload()) //relaod the page
      .catch(err => console.log(err));
  };


  // callback function stores the token to session storage when it changes
  useEffect(()=> {
    if (token !== null) {
      sessionStorage.setItem('token', JSON.stringify(token))
    }
  }, [token])


  return (
    <div clasName="container">
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={6} style={{marginTop: 150}}>
          <Paper elevation={3} className={classes.paper}>
            {/* if loading, show lottie, else display form */}
            {loading === false ? (
              <>
                <img src={Logo} style={{width: 200, alignSelf: "center"}} />
                <form className={classes.root} noValidate autoComplete="off">
                  <h3>Login</h3>
                  <div style={{flexDirection: "column", display: "flex"}}>
                    <TextField
                      id="1"
                      label="Email"
                      variant="outlined"
                      value={email}
                      placeholder="johndoe@example.com"
                      onChange={text => setEmail(text.target.value)}
                      style={{margin: 10}}
                      //makes text color white
                      InputProps={{
                        className: classes.input,
                      }}
                    />
                    <TextField
                      id="2"
                      label="Password"
                      variant="outlined"
                      value={password}
                      onChange={text => setPassword(text.target.value)}
                      type="password"
                      style={{margin: 10}}
                      //makes text color white
                      InputProps={{
                        className: classes.input,
                      }}
                    />
                  </div>
                </form>
                <Button
                  variant="contained"
                  style={{backgroundColor: "#6fbeeb", color: "white"}}
                  onClick={login}
                >
                  Login
                </Button>
              </>
            ) : (
              <div className="lottieContainer">
                <Lottie
                  loop
                  animationData={Loadanim}
                  play
                  style={{
                    width: 350,
                    height: 350,
                  }}
                />
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
