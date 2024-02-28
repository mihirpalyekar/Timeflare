// import relevant hooks, components and css styles

import dynamic from 'next/dynamic';
import { styled } from '@mui/material/styles';

// import apexcharts

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => null
});

export const Chart = styled(ApexChart)``;
