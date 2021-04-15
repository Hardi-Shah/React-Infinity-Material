import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";

const Login = () => {
  return (
    <div className="wrapper">
      <main className="main-content">
        <div className="row">
          <div className="col-lg-6 col-md-4 login-left">
            <img src={Logo} alt="Infinity" className="img-responsive logo" />
          </div>

          <div className="col-lg-6 col-md-8">
            <div className="login-right">
              <div className="login-content">
                <h3 className="login-text">Login</h3>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="uname"
                      placeholder="Username"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <div className="row">
                    <div className="col-sm-6">
                      <Button
                        type="button"
                        variant="primary"
                        className="btn-login"
                      >
                        Login
                      </Button>{" "}
                    </div>
                    <div className="col-sm-6 forgot-password">
                      <Link to="#">Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="signup-link">
                    Don't have an account?{" "}
                    <span>
                      <Link to="#">Sign Up</Link>
                    </span>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
