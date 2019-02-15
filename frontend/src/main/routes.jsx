import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Dashboard2 from '../dashboard2/dashboard2'
import BillingCycles from '../billingCycles/billingCycles'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard2} />
        <Route path='/billingCycles' component={BillingCycles} />
        <Redirect from='*' to='/' />
    </Router>
)