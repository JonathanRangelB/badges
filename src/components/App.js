import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
          <Route component={NotFound}></Route> {/* Puedo agregar exact y path junto con el BrowserRouter.Redirect para tener el mismo efecto */}
          {/* <Redirect from='*' to='/404' /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
