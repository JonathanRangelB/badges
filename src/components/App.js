import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home}></Route> */}
        <Route exact path="/Badges" component={Badges}></Route>
        <Route exact path="/Badges/New" component={BadgeNew}></Route>
        {/* <Route exact path="/Badges/New" component={BadgeNew}></Route> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
