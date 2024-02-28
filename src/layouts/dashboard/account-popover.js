// import relevant hooks, components and css styles
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useSession, signOut } from "next-auth/react"

// Show account popover on top right side of the page
export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const { data: session } = useSession()
  console.log(session)
  //const auth = useAuth();
// handle the sign out action using router
  const handleSignOut = useCallback(
    () => {
      onClose?.();
      //auth.signOut();
      signOut();
      router.push('/auth/login');
    },
    [onClose, router]
  );

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      {/* show the account popover in a box  */}
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {session==undefined ? "User": session.user.name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        {/* handle sign out on clicking on sign out from account popover  */}
        <MenuItem onClick={()=>{signOut()}}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};
// Add type checking for acountpopover
AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
