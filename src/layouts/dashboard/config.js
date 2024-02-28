// import relevant hooks, components and css styles
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';
import {CalendarIcon, FolderIcon} from "@heroicons/react/20/solid";

// Set configurations for side navigation box in the webapp
export const items = [
  {
    title: 'My Workspace',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Time Sheet',
    path: '/timesheets/timer',
    icon: (
        <SvgIcon fontSize="small">
          <CalendarIcon/>
        </SvgIcon>
    )

  },

  {
    title: 'Projects',
    path: '/',
    icon: (
        <SvgIcon fontSize="small">
          <FolderIcon/>
        </SvgIcon>
    ),
  },

  {
    title: 'Reports',
    path: '/popUp',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },

  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'My Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Apps',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  }
];
