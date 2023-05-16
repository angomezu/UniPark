import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Row, Col } from 'react-bootstrap';
import AdminTopBar from './AdminTopBar';
import AdminSidebar from './AdminSideBar';

function TimeMgt() {
  const [userType, setUserType] = useState('');
  const [timePeriod, setTimePeriod] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected user type: ${userType}`);
    console.log(`Time period without charge: ${timePeriod}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop:'20px', paddingTop:'64px', maxWidth:'500px'}}>
      <div className="container mt-4 mb-3">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Tipo de Usuario</FormLabel>
            <FormControl
              as="select"
              value={userType}
              onChange={handleUserTypeChange}
              className="form-select" // add form-select class for a styled select dropdown
            >
              <option value="">-- Seleccione tipo de Usuario --</option>
              <option value="teach">Catedratico</option>
              <option value="student">Estudiante</option>
              <option value="other">Visitante</option>
            </FormControl>
          </FormGroup>
          <FormGroup style={{marginTop:"10px"}}>
            <FormLabel>Tiempo otorgado de parqueo</FormLabel>
            <FormControl
              type="text"
              placeholder="Ingrese el periodo de tiempo"
              value={timePeriod}
              onChange={handleTimePeriodChange}
              className="form-control" // add form-control class for a styled input field
            />
          </FormGroup>
          <Button type="submit" className="btn-primary" style={{marginTop:"10px"}}>Agregar</Button> {/* add btn-primary class for a blue primary button */}
        </Form>
      </div>
    </div>
    </div>
  </div>
  );
}

export default TimeMgt;