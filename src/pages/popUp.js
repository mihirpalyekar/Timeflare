// import relevant hooks, components and css styles

import React, { useState } from 'react';
import HomePage from 'src/pages/homePage';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  IconButton } from '@mui/material';



const Page = () => {
  const [open, setOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const styles = {
    dialogTitle: {
      textAlign: 'center'
    }
  };
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleClose();
  };
// Add pop up emoticons when the page loads
  return (
    <>
      <HomePage />
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={styles.dialogTitle}>How are you feeling today?</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset">
          <RadioGroup
            value={selectedOption}
            onChange={handleOptionChange}
            sx={{ flexDirection: "row" }}
          >
            <FormControlLabel
              value="Happy"
              control={<Radio
                sx={{ color: 'transparent' }}
                    disableRipple 
                    />}
              label={
                <IconButton onClick={() => handleOptionChange({ target: { value: "Happy" } })}>
                <img src="/assets/logos/smile.png" alt="Happy" width="50" height="50" />
              </IconButton>
              }
            />
            <FormControlLabel
              value="Motivated"
              control={<Radio
                sx={{ color: 'transparent' }}
                    disableRipple />}
              label={
                <IconButton onClick={() => handleOptionChange({ target: { value: "Motivated" } })}>
                      <img src="/assets/logos/motivated.webp" alt="Motivated" width="50" height="50" />
                    </IconButton>
              }
            />
            <FormControlLabel
              value="Sad"
              control={<Radio 
                sx={{ color: 'transparent' }}
                disableRipple/>}
              label={
                <IconButton onClick={() => handleOptionChange({ target: { value: "Sad" } })}>
                      <img src="/assets/logos/burning-out.jpg" alt="Sad" width="50" height="50" />
                    </IconButton>
              }
            />
            <FormControlLabel
              value="Neutral"
              control={<Radio 
                sx={{ color: 'transparent' }}
                disableRipple/>}
              label={
                <IconButton onClick={() => handleOptionChange({ target: { value: "Neutral" } })}>
                      <img src="/assets/logos/no-emotion.jpeg" alt="Neutral" width="50" height="50" />
                    </IconButton>
              }
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
    </Dialog>
    </>
  );
};

// Add side navigation bar

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
