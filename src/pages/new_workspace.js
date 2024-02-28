// import relevant hooks, components and css styles

import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { NewWorkspace } from 'src/sections/new_workspace/new_workspace';
import { NewWorkspaceDetails } from 'src/sections/new_workspace/new_workspace_details';

const Page = () => (
  <>
    <Head>
      <title>
        TimeFlare
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Create new workspace!
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
{/* Display form to get required information from user to create new workspace */}
                <NewWorkspace />
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
{/* Fetch details of new workspace from NewWorkspaceDetails component */}
                <NewWorkspaceDetails />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);
// Add side navigation bar
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export async function getServerSideProps({req}){
  const session = await getSession({req})
  if(!session){
    return{
      redirect:{
        destination:"/auth/login",
        permanent:false
      }
    }
  }
  return{
    props:{session}
  }
  
}

export default Page;
