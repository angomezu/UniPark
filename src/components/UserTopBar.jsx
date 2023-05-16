import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { reloadWithHash } from "../App";

const UserTopBar = () => {

  const handleLogout = () => {
    localStorage.clear('user');
    reloadWithHash("/");
  };

  return (
    <AppBar position="fixed" style={{backgroundColor:"#3498db"}}  sx={{ top: 0 }}>
      <Toolbar>
        <Typography variant="h6">Perfil UniPark</Typography>
        <Button sx={{ position: "fixed", top: 0, right: 0, zIndex: 2000 }} color="inherit" onClick={handleLogout}>
          Cerrar Sesión 
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default UserTopBar;