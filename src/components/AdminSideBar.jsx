import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { AccessTime,DirectionsCar,StarTwoTone, OpenWithRounded, Accessibility, VerifiedUser} from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from '@mui/material';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "linear-gradient(to bottom right, #5D3FD3, #9B23C8)", // navy blue
    color: '#fff',
    marginTop: '64px'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  selectedListItem: {
    color: "#9B23C8",
  },
}));

function AdminSidebar() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const [openSys, setOpenSys] = React.useState(false);
  const [openCon, setOpenCon] = React.useState(false);
  const [openAd, setOpenAd] = React.useState(false);
  var currentHref = window.location.href;
  const location = useLocation();
  console.log(location.pathname);

  const syshandleClick = () => {
    setOpenSys(!openSys);
  };


  const conhandleClick = () => {
    setOpenCon(!openCon);
  };

  const adhandleClick = () => {
    setOpenAd(!openAd);
  };


  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
         style={{ marginTop: '80px !important' }}
      >
        <List>
          <ListItem button onClick={()=>window.location.href='#/welcome'}>
            <ListItemIcon>
              <StarTwoTone/>
            </ListItemIcon>
            <ListItemText primary="Bienvenido, Administrador" />
          </ListItem>
          <ListItem button onClick={syshandleClick}>
            <ListItemIcon>
              <Accessibility />
            </ListItemIcon>
            <ListItemText primary="Módulos" />
            {openSys ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSys} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} style={{backgroundColor: window.location.hash === '#/admin-time-mgt'? '#5D3FD3' : 'linear-gradient(to bottom right, #5D3FD3, #9B23C8)'}} onClick={()=>window.location.href='#/admin-time-mgt'}>
                <ListItemIcon>
                  <AccessTime/>
                </ListItemIcon>
                <ListItemText primary="Administracion de Horarios"/>
              </ListItem>
              <ListItem button className={classes.nested} style={{backgroundColor: window.location.hash === '#/admin-slot-mgt' ? '#5D3FD3' : 'linear-gradient(to bottom right, #5D3FD3, #9B23C8)'}} onClick={()=>window.location.href='#/admin-slot-mgt'}>
                <ListItemIcon>
                  <DirectionsCar/>
                </ListItemIcon>
                <ListItemText primary="Administracion de Parqueos"/>
              </ListItem>
              <ListItem button className={classes.nested} style={{backgroundColor: location.pathname === '/admin-slot-mgt' ? '#5D3FD3' : 'linear-gradient(to bottom right, #5D3FD3, #9B23C8)'}} onClick={()=>window.location.href='#/energy-measurements'} >
                <ListItemIcon>
                  <VerifiedUser/>
                </ListItemIcon>
                <ListItemText primary="Administracion de Usuarios" />
              </ListItem>
              <ListItem button className={classes.nested} >
                <ListItemIcon>
                  <OpenWithRounded />
                </ListItemIcon>
                <ListItemText primary="Reporteria" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}

export default AdminSidebar;