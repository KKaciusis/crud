
import './App.css';
import './index.css';

import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { authProvider } from './components/authentification/Auth';

const dataProvider = jsonServerProvider('http://localhost:3001/api');
const App = () => (
    <Router>
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="cows" list={ListGuesser} />
    </Admin>
    <Route path="/home" component={Home}/>
    </Router>
);

export default App;
