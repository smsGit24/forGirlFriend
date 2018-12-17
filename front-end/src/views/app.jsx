import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './index'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(({ path, component, exact }) => (
            <Route key={path} path={path} exact={exact} component={component} />
          ))}
        </Switch>
      </Router>
    )
  }
}

export default App
