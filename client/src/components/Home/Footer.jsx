import * as React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import '../../index.css'

const Footer = () => (
    <footer className="footer">
    <Box bgcolor="#98afd4">
        <Container>
            <Box display="flex" justifyContent="center">
                <Box height="40px" padding="10px" display="flex" alignItems='center' justifyContent='center'>
                <Button variant="outlined" href="/admin" endIcon={<SupervisorAccountOutlinedIcon/>}>Admin Page</Button>
                </Box>
                <Box height="40px" padding="10px" display="flex" alignItems="center" justifyContent="center">
                <Button variant="outlined" href="/contacts" endIcon={<ImportContactsIcon/>}>Contacts Page</Button>
                </Box>
                <IconButton href="https://www.youtube.com/watch?v=9hhMUT2U2L4"><YouTubeIcon/></IconButton>
            </Box>
            <Box color="white" textAlign="center">
                COW TIER LIST &reg; {new Date().getFullYear()}
            </Box>
        </Container>
    </Box>
    </footer>
);

export default Footer;