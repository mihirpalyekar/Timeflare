// import relevant hooks, components and css styles

import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
  
// Sample user details

  const user = {
    avatar: '',
    city: 'Virginia',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: '',
    timezone: 'EST'
  };
  
  export const NewWorkspace = () => (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
          >
            {user.name}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    {/* Accept workspace logo  */}
      <CardActions>
        <Button
          fullWidth
          variant="text"
        >
          Upload Workspace Logo
        </Button>
      </CardActions>
    </Card>
  );
  
