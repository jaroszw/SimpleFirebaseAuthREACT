import React, { useContext } from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import AuthProvider from './contexts/AuthContext';
import Signup from './components/Signup';
import Signin from './components/Signin';
import BookPage from './components/BookPage';
import { firebaseAuth } from './contexts/AuthContext';

function App() {
  const { token } = useContext(firebaseAuth);
  console.log(token);

  return (
    <div className="App">
      <Router>
        <BookContextProvider>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                token === null ? <Redirect to="/signup" /> : <BookPage />
              }
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/bookpage" component={BookPage} />
          </Switch>
        </BookContextProvider>
      </Router>
    </div>
  );
}

export default App;
