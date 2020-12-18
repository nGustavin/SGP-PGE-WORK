import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing/index'
import itemView from './pages/ViewItem/index'
import CreateItem from './pages/CreateItem/index'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/create-item" component={CreateItem}/>
        <Route path="/item-view" component={itemView}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes