import React from 'react'
import { Route, Switch } from 'react-router'
import Header from './components/header'
import Home from './components/home'
import FordPass from './components/ford-pass'
import LincolnWay from './components/lincoln-way'

const routes = (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/fordpass' component={FordPass} />
      <Route path='/lincolnway' component={LincolnWay} />
      <Route component={Home} />
    </Switch>
  </div>
)

export default routes
