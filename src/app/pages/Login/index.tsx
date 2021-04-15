import { FormGroup, Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";

const Login = () => {
  return (
    <div className="wrapper">
      <main className="main-content">
        <Grid container>
          <Grid item xs={12} sm={6} className="login-left">
            <img src={Logo} alt="Infinity" className="img-responsive logo" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="login-right">
              <div className="login-content">
                <h3 className="login-text">Login</h3>
                  <FormGroup>
                    <TextField
                      id="uname"
                      type="text"
                      label="Username"
                      variant="filled"
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      id="Password"
                      type="password"
                      label="Password"
                      variant="filled"
                    />
                  </FormGroup>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        className="btn-login"
                      >
                        Login
                      </Button>{" "}
                    </Grid>

                    <Grid item xs={12} sm={6} className="forgot-password">
                      <Link to="#">Forgot Password?</Link>
                    </Grid>
                  </Grid>
                  <div className="signup-link">
                    Don't have an account?{" "}
                    <span>
                      <Link to="#">Sign Up</Link>
                    </span>
                  </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Login;
