import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Airlines from './components/Airlines';
import Error404 from './components/Error404';

const App = () => {
  return (
    <div className="app-container pad-one">
      <BrowserRouter>
        <Switch>
          <Route exact path={["/airlines/:id", "/airlines/", "/"]}
            render={(props) => <Airlines {...props} baseUrl={`/airlines`} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
