import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
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
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';
import { ProjectCards} from 'src/sections/cards/cards';
import {NewWorkspace} from 'src/pages/new_workspace.js';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';
import { useSession, signIn, signOut, getSession } from "next-auth/react"
var projects = [
  {
    _id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '12/03/2023',
    logo: '/assets/products/project-1.jpg',
    description: 'Scrum Management tool',
    name: 'CollabForce'
  },
  {
    _id: '2569ce0d517a7f06d3ea1f25',
    createdAt: '12/03/2023',
    logo: '/assets/products/project-2.jpg',
    description: 'Computer Vision Project',
    name: 'TimeFlare'
  },
  {
    _id: '2569ce0d517a7f06d3ea1f26',
    createdAt: '12/03/2023',
    description: 'React rewrite for Epsilon',
    logo: '/assets/products/project-3.jpg',
    name: 'Dev1',
  },
];

// (async () => {
//   await fetch("http://localhost:3000/api/project/project").then(response=>{return response.json()}).then(data=>{
//     console.log((data.data))
//     projects = [...new Set(data.data.map(item => item.name))];
//    //projects = data.data;
//   });
// })();
 

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
                key={project._id}
              >
                <ProjectCards  
                component={NextLink}
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
