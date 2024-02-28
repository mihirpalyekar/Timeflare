// import relevant hooks, components and css styles
import React from "react";
import { Tab, Box, Card } from "@mui/material";
import {TabList,TabContext,TabPanel} from "@mui/lab";
import ReactStickyNotes from "./@react-latest-ui/react-sticky-notes";
import {Kanban} from './kanban'


export function TabBar() {
const [selectedTab,setSelectedTab]= React.useState("1");

const handleTabs= (event,newValue) => {
  setSelectedTab(newValue);
};
// create 3 tabs for Bulletin board, tasks and chat
  return (
      <TabContext  value={selectedTab} >
        <Box sx={{borderBottom:1, borderColor:'divider'}}>
        <TabList onChange={handleTabs} aria-label="test">
          <Tab fontSize="small" sx={{ color: 'blue', justifyContent: 'center' }} label="Bulletin Board" value="1" />
          <Tab fontSize="small" sx={{ color: 'blue', justifyContent: 'center' }} label="Tasks"  value="2"/>
          <Tab fontSize="small" sx={{ color: 'blue', justifyContent: 'center' }} label="Chat" value="3"/>
        </TabList>
        </Box>
{/* add sticky notes in tab 1 */}
      <TabPanel value="1" >
      <ReactStickyNotes />
      </TabPanel>
{/* add Kanban board in tab 2 */}
      <TabPanel value="2" > 
      <Kanban />
      </TabPanel>
{/* Tab 3 will be a part of Future scope */}
      <TabPanel value="3" > Tab 3</TabPanel>
      </TabContext>
  );
}
