import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  message?: string;
  fullPage?: boolean;
}

export const Loading: React.FC<Props> = ({ message, fullPage }) => {
  return (
    <Box height={fullPage ? '100vh' : null} clone>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        direction="column"
        justify="center"

      >
        <Grid item>
          <CircularProgress color="secondary" />
        </Grid>
        {message && (
          <Grid item>
            <Box>
              <Typography variant="h5" color="secondary">
                {message}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
