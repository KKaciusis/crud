import './App.css';
import React, { useState, useEffect } from "react";

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import Dashboard from './components/Dashboard';

const dataProvider = jsonServerProvider('http://localhost:3001/api');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="cows" list={ListGuesser} />
    </Admin>
);

export default App;
