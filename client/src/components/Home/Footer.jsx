import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const Footer = () => (
    <footer className="footer">
    <Box bgcolor="#73839c">
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="center">
                    <Box height="40px" padding="10px" display="flex" alignItems='center' justifyContent='center'>
                    <Button variant="outlined" href="/contacts" endIcon={<SupervisorAccountOutlinedIcon/>}>Contacts</Button>
                    </Box>
                    <Box height="40px" padding="10px" display="flex" alignItems="center" justifyContent="center">
                    <Button variant="outlined" href="/contacts" endIcon={<ImportContactsIcon/>}>Contacts</Button>
                    </Box>
                </Box>
        </Container>
    </Box>
    </footer>
);

export default Footer;