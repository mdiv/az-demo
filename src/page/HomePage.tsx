import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  GridList,
  GridListTile,
  TextField,
  Typography,
} from '@material-ui/core';
import { GreetingAction } from 'actions/greeting';
import { Loading } from 'component/Service/Loading';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import {
  selectCallStatus,
  selectGreeting,
  selectGreetingCounts,
} from '../selectors';

export const HomePage: React.FunctionComponent<RouteProps> = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);
  const counts = useSelector(selectGreetingCounts);
  const callStatus = useSelector(selectCallStatus);
  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(GreetingAction.Counts());
  }, []);

  return (
    <React.Fragment>
      <AppBar color="default" position="sticky">
        <Grid container>
          <Grid item>
            <Box margin={4}>
              <Typography variant="h5" id="title__tech-demo">
                Tech Demo
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AppBar>

      <Box margin={4}>
        <Typography id="title__personalised-greeting" variant="h4" gutterBottom>
          Personalised greeting
        </Typography>
        <GridList spacing={32} cellHeight="auto" cols={2}>
          <GridListTile>
            <Card>
              <form
                id="form__personalised-greeting"
                onSubmit={(e) => e.preventDefault()}
              >
                <CardContent>
                  <TextField
                    id="text-input__name"
                    label="Enter your name"
                    helperText={callStatus.greeting.error}
                    FormHelperTextProps={{ error: true }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    fullWidth
                  />
                </CardContent>
                <CardContent>
                  <Button
                    id="button__get-greeting"
                    color="primary"
                    type="submit"
                    variant="contained"
                    onClick={() => dispatch(GreetingAction.Greeting(name))}
                  >
                    Get greeting
                  </Button>
                </CardContent>
              </form>
            </Card>
          </GridListTile>

          {['success', 'fetching'].includes(
            callStatus.greeting.status as string,
          ) && (
            <GridListTile>
              <Card>
                <CardContent>
                  {callStatus.greeting.status === 'fetching' && <Loading />}
                  {callStatus.greeting.status === 'success' && (
                    <Typography id="text__greeting" variant="h4">
                      {greeting}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </GridListTile>
          )}
        </GridList>
      </Box>

      <Box margin={4}>
        <Typography id="title__greeting-counts" variant="h4" gutterBottom>
          Greeting counts
        </Typography>
        <GridList spacing={32} cellHeight="auto" cols={4}>
          {counts && callStatus.counts.status === 'fetching' && (
            <GridListTile>
              <Card>
                <CardContent>
                  <Loading />
                </CardContent>
              </Card>
            </GridListTile>
          )}
          {counts && callStatus.counts.status === 'error' && (
            <GridListTile>
              <Card>
                <CardContent>
                  <Typography id={`title__get-count-error`} color="error">
                    {callStatus.counts.error}
                  </Typography>
                </CardContent>
              </Card>
            </GridListTile>
          )}
          {counts &&
            callStatus.counts.status === 'success' &&
            Object.keys(counts).map((key) => {
              return (
                <GridListTile id={`tile__count-for-${key}`} key={key}>
                  <Card>
                    <CardContent>
                      <Typography id={`title__count-name`} variant="h4">
                        {key}
                      </Typography>
                      <Typography
                        id={`title__count-amount`}
                        variant="h1"
                        align="right"
                      >
                        {counts[key]}
                      </Typography>
                    </CardContent>
                  </Card>
                </GridListTile>
              );
            })}
        </GridList>
      </Box>
    </React.Fragment>
  );
};
