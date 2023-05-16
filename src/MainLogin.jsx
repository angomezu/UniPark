import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

 



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom right, #5D3FD3, #9B23C8)",
        padding: "20px",
      }}
    >
      <Typography variant="h4" sx={{ marginTop: "20px", color: "#fff" }}>
        ¡Bienvenido al Sistema de Control de Acceso UniPark!
      </Typography>
      <Box sx={{ margin: "100px" }}>
        <Button variant="contained" color="primary" sx={{ marginRight: 2 }} onClick={()=>window.location.href ='#/user-registration'}>
          Registrarse
        </Button>
        <Button variant="contained" color="primary" sx={{ marginRight: 2 }} onClick={()=>window.location.href ='#/user-login'}>
          Ingresar a Unipark
        </Button>
        <Button variant="contained" color="secondary" onClick={()=>window.location.href ='#/admin-login'}>
          Ingresar como Administrador
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
