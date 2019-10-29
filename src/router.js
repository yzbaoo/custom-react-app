import React from "react";
import { Route, Switch, routerRedux } from "dva/router";
import IndexPage from "@/routes/exemple_01/containers/ExempleIndexPage";

// import PageNotFound from './routes/not_found';
// import Container from '@containers/Container';

const Router = routerRedux.ConnectedRouter;

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/*<Route component={PageNotFound} />*/}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
