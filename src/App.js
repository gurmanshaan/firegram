import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login';

function App() {
  return (

    <Container className=" d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch >
              <Route exact path="/home" component={Home} />
              <Route path="/" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container >
  );
}

export default App;
