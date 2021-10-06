
import './App.css';
import './index.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AdminPage from './Pages/Admin';

const App = () => (
    <Router>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/" component={HomePage}/>
    </Router>
);

export default App;
