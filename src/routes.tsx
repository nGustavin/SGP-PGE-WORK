import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing/index'
import ItemSetForm from './pages/CreateItemSet/form'
import CreateItemSet from './pages/CreateItemSet/index'
import CreateItem from './pages/CreateItem/index'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/view-set" component={CreateItemSet}/>
        <Route path="/create-item-set" component={ItemSetForm}/>
        <Route path="/create-item" component={CreateItem}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes