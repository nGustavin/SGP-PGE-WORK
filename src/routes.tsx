import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing/index'
import CreateItemSet from './pages/CreateItemSet/index'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/create-set" component={CreateItemSet}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes