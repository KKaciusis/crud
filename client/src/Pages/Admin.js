
import '../App.css';
import '../index.css';

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import Dashboard from '../components/pages/Dashboard';
import { authProvider } from '../components/auth/Auth';

const dataProvider = jsonServerProvider('http://localhost:3001/api');

const AdminPage = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="cows" list={ListGuesser} />
    </Admin>
);

export default AdminPage;