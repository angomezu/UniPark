import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function ReflectCard({ data }) {
  return (
    <Card sx={{ minWidth: 125 , minHeight:175, margin:'10px' , backgroundColor:'#392b40' , borderRadius:'25px'}}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h5" component="h2" color="white">
        {data.parking_id}
      </Typography>
      <Typography variant="subtitle1" component="h2" color="white">
        Name : {data.first_name}
      </Typography>
      <Typography variant="subtitle1" component="h2" color="white">
        CIF : {data.cif}
      </Typography>
      <Typography variant="subtitle1" component="h2" color="white">
        Vehicle No: {data.vehicle_no}
      </Typography>
      <Typography variant="subtitle1" component="h2" color="white">
        User Type : {data.is_teacher ? "Teacher" : data.is_student ? "Student" : data.fac_member_other ? "Faculty Member" :"Other"}
      </Typography>
      <Typography variant="subtitle1" component="h2" color="white">
        Equiped time: {new Date(data.equipped_time).toLocaleString()}
      </Typography>
      <Typography variant="subtitle1" component="h2" color="white">
        Current Charge: 
      </Typography>
      </CardContent>
    </Card>
  );
}

export default ReflectCard;