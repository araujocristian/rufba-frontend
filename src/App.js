import React from "react";
import { UserValidate } from "./users";
import { Header } from "./header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

const App = () => (
  <div>
    <Router>
      <UserValidate />
      <header>
        <Switch>
          <Route path="/login" component={Header} />
          <Route path="/cadastro" component={Header} />
          <Route path="/" component={Header} />
          <Route component={Header} />
        </Switch>
      </header>
      <main>
        <Switch>
          {routes.map((route, i) => {
            const { component, ...options } = route;
            return <Route key={i} component={component} {...options} />;
          })}
          <Route component={() => <h1>Page not found</h1>} /> {/*TODO: Fazer Page Not Found*/}
        </Switch>
      </main>
    </Router>
  </div>
);
export default App;
