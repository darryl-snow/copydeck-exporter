import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import FordPass from './ford-pass'
import LincolnWay from './lincoln-way'

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/fordpass' component={FordPass} />
      <Route exact path='/lincolnway' component={LincolnWay} />
    </Switch>
  </div>
)

export default Main
