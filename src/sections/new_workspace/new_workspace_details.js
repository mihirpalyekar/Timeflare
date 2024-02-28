// import relevant hooks, components and css styles

import { useCallback, useState } from 'react';
import { Switch, FormLabel } from '@mui/material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Input,
  Unstable_Grid2 as Grid
} from '@mui/material';

// create sample users

const users = [
  {
    value: 'Devashree Bhagwat',
    label: 'Devashree Bhagwat'
  },
  {
    value: 'Nikhil Ram',
    label: 'Nikhil Ram'
  },
  {
    value: 'Aseem Khandelwal',
    label: 'Aseem Khandelwal'
  },
  {
    value: 'Nikita Yeole',
    label: 'Nikita Yeole'
  }
];

export const NewWorkspaceDetails = () => {
  // sample placeholder for new workspace creation form
  const [values, setValues] = useState({
    firstName: 'Nikhil',
    lastName: 'Ram',
    email: 'demo@vt.edu',
    phone: '',
    state: 'virginia',
    country: 'USA'
  });

// function to handle different workspace related values entered by user
  const [values_workspace, setValues_workspace] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: ''
  });


// Function to return memorised version of the field on rerender 
  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );
// Function to handle submit action of the form
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    // Accept new workspace creation form
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
{/* Accept workspace name and required details  */}
      <Card>
        <CardHeader
          subheader="Please provide more details for your workspace"
          title="New Workspace"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
  {/* Accept workspace name  */}
                <TextField
                  fullWidth
                  helperText="Please specify the project name"
                  label="Workspace Name"
                  name=""
                  onChange={handleChange}
                  required
                  value={values_workspace.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
     {/* select users to be added to the workspace  */}
                <TextField
                  fullWidth
                  label="Select Users to be added"
                  name="users"
                  onChange={handleChange}
                  required
                  value={values_workspace.users}
                >
                  {users.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
     {/* Manage spacing and alignment of fields  */}
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              <Grid
                xs={12}
                md={6}
              ></Grid>
              </Grid>
              <Grid
                xs={10}
                md={3}
              ></Grid>
{/* Add option to turn on notifications  */}
              <small>
              <i> Turn On Notifications</i>
              </small>
              <Switch {...FormLabel} defaultChecked size="small" >  </Switch>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
{/* submit button to submit the form  */}
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
