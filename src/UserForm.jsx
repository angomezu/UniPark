import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import uiBuilder from '../node_modules/node-red-contrib-uibuilder/front-end/uibuilderfe'



const RegistrationForm = () => {
  const [userType, setUserType] = useState("");
  const [faculty, setFaculty] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [cif, setCIF] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleFacultyChange = (event) => {
    setFaculty(event.target.value);
  };

  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  const handleWorkplaceChange = (event) => {
    setWorkplace(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  function registerClick() {

    console.log(email);
    uiBuilder.send({
      topic: "registerUser",
      payload: {
        email: email,
        password: password,
        userType: userType,
        faculty: faculty,
        occupation: occupation,
        workplace: workplace,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        vehicleNo: vehicleNo,
        cif:cif,
      },
    });

    window.location.href="#/user-login"
  }

  const renderUserTypeFields = () => {
    if (userType === "student" || userType === "teacher" || userType === "university_member") {
      return (
        <>
        <FormControl sx={{ marginBottom: "20px", width: "100%" }}>
          <FormLabel>Facultad</FormLabel>
          <Select value={faculty} label="Faculty" onChange={handleFacultyChange}>
            <MenuItem value="faculty1">Ingenierias</MenuItem>
            <MenuItem value="faculty2">Ciencias Juridicas</MenuItem>
            <MenuItem value="faculty3">Medicina</MenuItem>
          </Select>
        </FormControl>
        <TextField
            label="Placa de Vehiculo"
            variant="outlined"
            sx={{ marginBottom: "20px", width: "100%" }}
            required
            onChange={(e) => setVehicleNo(e.target.value)}
            // value={workplace}
            // onChange={handleWorkplaceChange}
          />
        </>
      );
    } else if (userType === "outsider") {
      return (
        <>
          <TextField
            label="Ocupacion"
            variant="outlined"
            sx={{ marginBottom: "20px", width: "100%" }}
            required
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          <TextField
            label="Lugar de Trabajo"
            variant="outlined"
            sx={{ marginBottom: "20px", width: "100%" }}
            required
            value={workplace}
            onChange={(e) => setWorkplace(e.target.value)}
          />
          <TextField
            label="Placa de Vehiculo"
            variant="outlined"
            sx={{ marginBottom: "20px", width: "100%" }}
            required
            // value={workplace}
            onChange={(e) => setVehicleNo(e.target.value)}
          />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      minHeight: "100vh",
      maxHeight: "max-content",
      background: "linear-gradient(to bottom right, #5D3FD3, #9B23C8)",
      padding: "20px",
    }}
  >
      <Typography variant="h4" sx={{ marginTop: "20px", color: "#fff" }}>
        Registro para Sistema de acceso UniPark
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width:"40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <TextField label="Primer Nombre" variant="outlined" sx={{ marginBottom: "20px", width: "100%" }} required  onChange={(e) => setFirstName(e.target.value)}/>
        <TextField label="Segundo Nombre" variant="outlined"sx={{ marginBottom: "20px", width: "100%" }} required onChange={(e) => setMiddleName(e.target.value)}/>
         <TextField label="Apellido" variant="outlined" sx={{ marginBottom: "20px", width: "100%" }} required onChange={(e) => setLastName(e.target.value)}/>
         <TextField
           label="Correo Electronico"
           variant="outlined"
           sx={{ marginBottom: "20px", width: "100%" }}
           type="email"
           required
           onChange={(e) => setEmail(e.target.value)}
         />
         <TextField label="CIF" variant="outlined" sx={{ marginBottom: "20px", width: "100%" }} required onChange={(e) => setCIF(e.target.value)}/>
         <TextField
           label="Contraseña"
           variant="outlined"
           sx={{ marginBottom: "20px", width: "100%" }}
           type="password"
           required
           onChange={(e) => setPassword(e.target.value)}
         />
         <FormControl component="fieldset" sx={{ marginBottom: "20px", width: "100%" }}>
           <FormLabel component="legend">Tipo de Usuario</FormLabel>
           <RadioGroup value={userType} onChange={handleUserTypeChange}>
             <FormControlLabel value="student" control={<Radio />} label="Estudiante" />
             <FormControlLabel value="teacher" control={<Radio />} label="Catedratico" />
             <FormControlLabel value="university_member" control={<Radio />} label="Miembro de la Universidad" />
             <FormControlLabel value="outsider" control={<Radio />} label="Visitante" />
           </RadioGroup>
         </FormControl>
         {renderUserTypeFields()}
         <Button type="submit" variant="contained" sx={{ marginTop: "20px" }} onClick={()=>registerClick()}>
           Registrarse
         </Button>
       </Box>
     </Box>
   );
 };
 
 export default RegistrationForm;