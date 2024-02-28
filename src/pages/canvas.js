// import relevant hooks, components and css styles

import Head from 'next/head';
import {Avatar, Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import {TabBar} from "src/components/tabs";
import { AccountPopover } from 'src/layouts/dashboard/account-popover';
import { usePopover } from 'src/hooks/use-popover';
import { useParams } from 'react-router';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Button,
  SvgIcon
} from '@mui/material';

const SIDE_NAV_WIDTH = 880;
const TOP_NAV_HEIGHT = 20;

const Page = (props) => {
  const { project } = props;
  const params= useParams()
  console.log(params)
  const accountPopover = usePopover();
  return (
  <>
    <Head>
      <title>
        TimeFlare
      </title>
    </Head>
    <Box
      component="main"
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4"  color= 'black'>
              Build your own canvas
            {/* Navigate to Jira dashboard by clicking on the Jira Tasks  */}
            <Button
            sx={{
              left:{
                lg: `-300px`
              },
              top:60,
              width: {
                lg: `400px`
              },
              cursor: 'pointer',
              height: 50,
              width: 200
            }}
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained" 
                href='https://collabforce.atlassian.net/jira/software/c/projects/COL/issues/COL-16?filter=allissues' target='_blank'
              >
            
                Jira Tasks
              </Button>
             {/* Add Microdoft Teams placeholder as part of future enhancement  */}
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                left:{
                  lg: `${SIDE_NAV_WIDTH}px`
                },
                top:-15,
                width: {
                  lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
                },
                cursor: 'pointer',
                height: 50,
                width: 50
              }}
              src="/assets/products/teams.png"
            /> 
            </Typography>
            <Typography variant="contained" 
            sx={{
              pl: '850px',
              top: -50,
              height : 20
            }}>
            <small>
               Microsoft Teams
              </small>
            </Typography>
          </div>
          <div>
          {/* Add tabs for Bulletin Board, Tasks and Chat  */}
          <TabBar />
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);
            }

// Add side navigation bar
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
