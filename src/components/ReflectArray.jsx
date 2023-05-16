import React from 'react';
import ReflectCard from './Cards';
import AdminTopBar from './AdminTopBar';
import AdminSidebar from './AdminSideBar';
import { Box } from '@mui/system';
import { useMediaQuery, useTheme } from '@mui/material';




function ReflectArray({ parkings }) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(useMediaQuery(theme.breakpoints.down('sm')));
  


  return (
    <div>
      <div style={{marginLeft:"260px"}}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', paddingTop: isMobile ? '48px' : '64px'}}>
      {parkings.map((user) => (
        <ReflectCard key={user.user_id}  data = {user} />
      ))}
    </Box>
    </div>
    </div>
    
  );
}

export default ReflectArray;