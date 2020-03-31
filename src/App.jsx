import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomePage from './pages/ShowDetails'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>TV Guide</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/tv/:showId" component={ShowDetails}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
