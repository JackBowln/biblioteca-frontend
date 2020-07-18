import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/Home'
import Crud from '../components/biblioteca/Crud'

export default props =>
<Switch>
    <Route exact path='/' component={Home}> </Route>
    <Route exact path='/Livros' component={Crud}> </Route>
    <Redirect from="*" to='/'></Redirect>
</Switch>