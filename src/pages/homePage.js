import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewProductivity } from 'src/sections/overview/overview-productivity';
import { OverviewProductivityGraph, OverviewSales } from 'src/sections/overview/overview-productivity_graph';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTeamProductivity } from 'src/sections/overview/overview-team-productivity';
import { OverviewTotalEmployees } from 'src/sections/overview/overview-total-employees';
import {OverviewTotalProfit} from 'src/sections/overview/overview-total-employees';
import { OverviewHappyIndex, OverviewTraffic } from 'src/sections/overview/overview-happy-index';
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';


const now = new Date();

const HomePage = () => (
  <>
    <Head>
      <title>
        Home Page
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewProductivity
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="80%"
            />
          </Grid>

          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalEmployees
              sx={{ height: '100%' }}
              value="20"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTeamProductivity
              difference={5}
              positive={false}
              sx={{ height: '100%' }}
              value="70%"
            />
            </Grid>
          <Grid
            xs={12}
            lg={7}
          >
            <OverviewProductivityGraph
              chartSeries={[
                {
                  name: 'This year',
                  data: [70, 80, 60, 75, 81, 92, 90, 86, 94, 96, 93, 90]
                },
                {
                  name: 'Last year',
                  data: [80, 89, 60, , 70, 80, 94, 89, 80, 86, 90, 88]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={5}
          >
            <OverviewHappyIndex
              chartSeries={[63, 10, 22, 5]}
              labels={['Happy', 'Motivated', 'Sad','Neutral']}
              sx={{ height: '100%' }}
            />
            
          </Grid>
          
          
        </Grid>
      </Container>
    </Box>
  </>
);

HomePage.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export async function getServerSideProps({req}){
  const session = await getSession({req})
  console.log(session)
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
export default HomePage;
