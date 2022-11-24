import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Spotify/home';
import RedirectPage from '../Spotify/RedirectPage';
import Dashboard from '../Spotify/dashboard';
import NotFoundPage from '../Spotify/notFoundPage';
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/redirect" component={RedirectPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;