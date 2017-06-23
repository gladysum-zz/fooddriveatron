import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Organize from './Organize'
import Volunteer from './Volunteer'

const routes = [
  { path: '/',
    exact: true,
    main: Organize
  },
  { path: '/volunteer',
    main: Volunteer
  }
]

const App = () => (
  <Router>
    <div className="app">

        <Nav />

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}

    </div>
  </Router>
)

export default App