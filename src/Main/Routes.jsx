import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/Home'
import Crud from '../components/biblioteca/Crud'
import sortLivros from '../components/biblioteca/sortCrud.jsx'
import searchLivros from '../components/biblioteca/searchCrud.jsx'

export default props =>
<Switch>
    <Route exact path='/' component={Home}> </Route>
    <Route exact path='/Livros' component={Crud}> </Route>
    <Route exact path='/LivrosSort' component={ sortLivros }> </Route>
    <Route exact path='/LivrosSearch' component={ searchLivros }> </Route>
    <Redirect from="*" to='/'></Redirect>
</Switch>