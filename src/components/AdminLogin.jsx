import { useState, useEffect } from 'react';
import { TextField, Button, Paper,Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import uibuilder from 'node-red-contrib-uibuilder/front-end/uibuilderfe';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${user} Password: ${password}`);
      uibuilder.send({
        topic: "loginAdmin",
        payload: {
         username:user,
         password:password,
        },
      });
  
  };

  const navigate = useNavigate();
  var usr = localStorage.getItem('user')

  useEffect(() => {
    if (usr=='admin') {
      navigate('#/admin-home');
    }else if(usr == 'usr'){
      navigate('#/usr-home');
    }
  }, [navigate]);

  console.log(usr);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));





  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom right, #5D3FD3, #9B23C8)",
        padding: "20px",
      }}
    >
    <Paper elevation={3} style={{ padding: '2rem', maxWidth: '400px' }}>
      <form onSubmit={handleSubmit}>
      <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
        <Typography variant="h5">Bienvenido Administrador</Typography>
      </Box>
        <TextField
          label="Usuario"
          type="text"
          fullWidth
          value={user}
          onChange={handleUserChange}
          margin="normal"
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{backgroundColor:"#9B23C8"}} fullWidth>
          Ingresar
        </Button>
      </form>
    </Paper>
    </Box>
  );
};

export default AdminLogin;