import { useState } from 'react';
import { TextField, Button, Paper,Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import uibuilder from 'node-red-contrib-uibuilder/front-end/uibuilderfe';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
    uibuilder.send({
      topic: "loginUser",
      payload: {
       email:email,
       password:password,
      },
    });
  };

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
        <Typography variant="h5">Bienvenido a UniPark</Typography>
      </Box>
        <TextField
          label="Correo Electronico"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
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

export default UserLogin;