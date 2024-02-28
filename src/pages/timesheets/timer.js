import Head from "next/head";
import * as React from "react";

import {
  Box,
  Button,
  Container,
  ButtonGroup,
  Stack,
  Unstable_Grid2 as Grid,
  ClickAwayListener,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CompanyCard } from "src/sections/companies/company-card";
import { CompaniesSearch } from "src/sections/companies/companies-search";
import { ProjectCards } from "src/sections/cards/cards";
import { NewWorkspace } from "src/pages/new_workspace.js";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { PortalBox } from "src/sections/timer/project-popup";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

var projects = [
  {
    _id: "2569ce0d517a7f06d3ea1f24",
    createdAt: "12/03/2023",
    logo: "/assets/products/project-1.jpg",
    description: "Scrum Management tool",
    name: "CollabForce",
  },
  {
    _id: "2569ce0d517a7f06d3ea1f25",
    createdAt: "12/03/2023",
    logo: "/assets/products/project-2.jpg",
    description: "Computer Vision Project",
    name: "TimeFlare",
  },
  {
    _id: "2569ce0d517a7f06d3ea1f26",
    createdAt: "12/03/2023",
    description: "React rewrite for Epsilon",
    logo: "/assets/products/project-3.jpg",
    name: "Dev1",
  },
];

// (async () => {
//   await fetch("http://localhost:3000/api/project/project").then(response=>{return response.json()}).then(data=>{
//     console.log((data.data))
//     projects = [...new Set(data.data.map(item => item.name))];
//    //projects = data.data;
//   });
// })();

const Page = () => {
  const [value, setValue] = React.useState(null);
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  const [isPortalOpen, setPortalOpen] = React.useState(false);
  const textFieldRef = React.useRef(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const defaultStyle = {
    transition: "all 0.2s ease",
  
  };

  const expandedStyle = {
    position: 'absolute',
    left:'30%',
    transform:'translate(10px, 10px)',
    zIndex: 1000,
    width: '40vw', // or any desired width
    height: 'auto', // Adjust based on content
    transition: 'all 0.2s ease',
    backgroundColor: '#fff', // Ensure there's a background color
    // Optionally add a border or shadow for better visibility
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
    rows:6,
    outline:'none'
  };

  const handleFocus = () => {
    setPortalOpen(true);
  };

  const handleClose = () => {
    setPortalOpen(!isPortalOpen);
  };

  const handleClickAway = () => {
    setPortalOpen(false);
  };

  return (
    <>
      <Head>
        <title>TimeFlare</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl" height="100%">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Choose date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Stack alignItems="center" direction="row" spacing={1}></Stack>
              </Stack>
              <div>
                <ButtonGroup size="large" aria-label="Large button group">
                  <Button>Day</Button>
                  <Button>Week</Button>
                  <Button>Month</Button>
                </ButtonGroup>
              </div>
            </Stack>
            <Box
              sx={{
                border: 1,
                borderColor: "ButtonShadow",
                borderRadius: 2,
                p: 2,
                maxWidth: "100%",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ position: 'relative' }}
              >
                <ClickAwayListener onClickAway={handleClickAway}>
                  <Box>
                    <TextField
                      label="Project Name"
                      variant="outlined"
                      onFocus={handleFocus}
                      inputRef={textFieldRef}
                    />
                    {isPortalOpen && (
                      <PortalBox
                        open={isPortalOpen}
                        anchorEl={textFieldRef.current}
                        onClose={handleClose}
                      ></PortalBox>
                    )}
                  </Box>
                </ClickAwayListener>
                <TextField
                  variant="outlined"
                  placeholder="Add description..."
                  
                  minRows={isExpanded ? 4 : 1}
                  style={isExpanded ? expandedStyle : defaultStyle}
                  onFocus={() => setIsExpanded(true)}
                  onBlur={() => setIsExpanded(false)}
             
                />
                <Stack direction={"row"} spacing={2}>
                  <TimePicker
                    label="Start Time"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    inputFormat="HH:mm " // Display format for the input
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: 130 }} />
                    )}
                  />
                  <TimePicker
                    label="End Time"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    inputFormat="HH:mm"
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: 130 }} />
                    )}
                  />
                  <Button sx={{ ml: 2 }} variant="contained">
                    Add
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
export default Page;
