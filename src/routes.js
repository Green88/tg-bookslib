/**
 * Created by Tania on 12/08/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Books from './components/books';
import Profile from './components/profile';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Books} />
        <Route path="profile/:id" component={Profile}/>
    </Route>
);