// import relevant hooks, components and css styles

import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, Typography} from '@mui/material';


export const ProjectCards = (props) => {
  const { project } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        border : 'solid'
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 2
          }}
        >
    {/* Display workspace image and add canvas navigation link  */}
          <a href="/canvas">
          <img
            src={project.logo}
            variant="square"
          /> </a>
        </Box>
    {/* Show project title  */}
        <Typography
          align="center"
          gutterBottom
          variant="h5"
        >
          {project.name}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {project.description}
        </Typography>
      </CardContent>
    {/* Set alignment for project cards  */}
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
      </Stack>
    </Card>
  );
};

ProjectCards.propTypes = {
  project: PropTypes.object.isRequired
};
