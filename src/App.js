import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';


function App() {
  return (
    <div className="App">

      <Container>
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/" component={Home} /> */}
                <div className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}>
                  <div className="w-100 " style={{ maxWidth: "400px" }}>
                    {/* <Route path="/signup" component={Signup} /> */}
                    <Route path="/login" component={Login} />
                    {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
                  </div>
                </div>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
