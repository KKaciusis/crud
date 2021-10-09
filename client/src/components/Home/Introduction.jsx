import * as React from 'react';
import Box from '@material-ui/core/Box'; 
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import "../../index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MicNoneTwoTone, NoEncryption } from '@material-ui/icons';

const theme = createTheme();
theme.typography.h3 = {
    fontSize: '2rem',
    '@media (max-width:600px)': {
      fontSize: '1.6rem',
    },
    '@media (max-width:1000px)': {
        fontSize: '1rem',
      },
      '@media (max-width:800px)': {
        fontSize: '1.4rem',
      },
      '@media (max-width:1380px)': {
        fontSize: '1.8rem',
      },
  };
  theme.typography.body1={
    '@media (max-width:600px)': {
        display: 'none',
      },
      '@media (max-width:800px)': {
        display: 'none',
      },
      '@media (max-width:990px)': {
        display: 'none',
      },
      '@media (max-width:1380px)': {
        fontSize: '0.9rem',
      },
  }

export default function Introduction() {
  return (
    <Box className="intro-box">
        <img className="intro-img" src="images/intro-wall.jpg" alt="This is intro" />
        <Box className="intro-text">
        <ThemeProvider theme={theme}>
            <Typography variant="h3" className="intro-header">
                Welcome To Cow Tier List
            </Typography>
            <Typography className="intro-paragraph" variant="body1">
            Bacon ipsum dolor amet elit tri-tip reprehenderit, pork chop laborum commodo swine tail tempor occaecat. Frankfurter in esse labore ut velit chicken alcatra elit veniam nulla adipisicing quis culpa. Chicken tempor sunt, ham flank capicola pork chop aliquip shankle pork loin. Tempor esse cow chicken chuck occaecat.
            </Typography>
            </ThemeProvider>
        </Box>
    </Box>
  );
}
