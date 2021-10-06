
import './App.css';
import './index.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import { authProvider } from './components/authentification/Auth';
import AdminPage from './Admin';

const dataProvider = jsonServerProvider('http://localhost:3001/api');
const App = () => (
    <Router>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/" component={HomePage}/>
    </Router>
);

export default App;
