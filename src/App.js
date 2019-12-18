import React from 'react';
import { NotificationContainer } from 'react-notifications';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginView from './containers/Login';
import HomeView from './containers/Home';
import 'react-notifications/lib/notifications.css';
import PrivateRoute from './components/PrivateRoute';
import { authContext } from './utils/Context';


const getToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
}
function App() {
  return (
    <div>
      <NotificationContainer />
      <BrowserRouter>
        <Switch>
          <authContext.Provider value={{ authorized: getToken() }} >
            <Route path="/" component={LoginView} exact />
            <PrivateRoute path="/dashboard" component={HomeView} />
          </authContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
