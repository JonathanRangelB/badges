import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import NotFound from '../pages/NotFound'
import Layout from './Layout'
import Home from '../pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Badges" component={Badges}></Route>
        <Route exact path="/Badges/New" component={BadgeNew}></Route>
        <Route exact path="/404" component={NotFound}></Route>
        <Redirect from='*' to='/404'/>
        {/* <Route exact path="/Badges/New" component={BadgeNew}></Route> */}
      </Switch>
    </Layout>
    </BrowserRouter>
  )
}

export default App;
