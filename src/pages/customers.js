// import relevant hooks, components and css styles

import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompaniesSearch } from 'src/sections/companies/companies-search';
import { ProjectCards} from 'src/sections/cards/cards';
import NextLink from 'next/link';

// Create array for sample projects displayed on the workspace 

const projects = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '12/03/2023',
    description: '',
    logo: '/assets/products/project-1.jpg',
    title: 'CollabForce'
  },
  {
    id: '2569ce0d517a7f06d3ea1f25',
    createdAt: '12/03/2023',
    description: '',
    logo: '/assets/products/project-2.jpg',
    title: 'TimeFlare'
  },
  {
    id: '2569ce0d517a7f06d3ea1f26',
    createdAt: '12/03/2023',
    description: '',
    logo: '/assets/products/project-3.jpg',
    title: 'Dev1',
  },
];

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
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                My Workspace
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
              </Stack>
            </Stack>
  {/* Add functionality to create new workspace  */}
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
                component={NextLink}
                href="/new_workspace"
              >
                Add New Workspace
              </Button>
            </div>
          </Stack>
          <CompaniesSearch />
          <Grid
            container
            spacing={3}
          >
            {projects.map((project) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={project.id}
              >
{/* Navigate to canvas by clicking on the project cards  */}
                <ProjectCards  
                component={NextLink}
                href="/new_workspace"
                project={project} >
                </ProjectCards>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
