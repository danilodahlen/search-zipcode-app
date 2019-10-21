import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Search from '../zipcode/zipcodeSearch'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>  
        <Route>   
            <Route path="/search" component={Search}/>
            <Route path="/about" component={About}/>
            <Redirect from="*" to='/search'/>}
        </Route>   
    </Router>
)
