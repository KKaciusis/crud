import * as React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

export default function Introduction() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
          margin: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      }}
    >
    <Paper elevation={3}>
        <img src="/images/farmer.jpg"/>
        <Typography>This is the great Mc Menson. Founder of this glorious website</Typography>

        </Paper>
    <Paper elevation={3} />
    </Box>
  );
}
