import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/dashboard" />
    </Route>
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;
