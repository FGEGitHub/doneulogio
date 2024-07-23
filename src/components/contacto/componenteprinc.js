import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import InputLabel from '@mui/material/InputLabel';
import serviciodatos from "../../services/datos.js";
import { Divider, Toolbar, Typography } from "@mui/material";
import axios from "axios";

const HOOK_ID = "cb662cd3-488f-49af-a544-78cc110fffc4";
const SERVER = "sandbox.skrumify.com";
const URL = `https://${SERVER}/api/v1/hooks/${HOOK_ID}/tickets`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contacto(props) {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser');
    const user = JSON.parse(loggedUserJSON);
    setForm({ id: user.id });
  }, []);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDeterminar = async () => {
    const rta = await serviciodatos.mandarconsul(form);
    alert();
    window.location.reload();
  };

  return (
    <div className="App">
      <Box component="span" sx={{ p: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Typography color="primary" align="center" variant="h4" component="h1" gutterBottom>
            Don Eulogio
          </Typography>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Toolbar />
      <Box sx={{ flexGrow: 1, mx: "2%" }}>
        <Typography align="center" variant="h5" component="h1" gutterBottom>
          Contactate con nosotros
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              style={{ width: "100%" }}
              id="outlined-nombre"
              label="Nombres"
              placeholder="Ingresar nombre"
              name="nombre"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              style={{ width: "100%" }}
              id="outlined-apellido"
              label="Apellido"
              placeholder="Ingresar apellido"
              name="apellido"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              style={{ width: "100%" }}
              id="outlined-telefono"
              label="Teléfono"
              placeholder="Ingresar teléfono"
              name="telefono"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              style={{ width: "100%" }}
              id="outlined-email"
              label="Correo electrónico"
              placeholder="Ingresar correo electrónico"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              style={{ width: "100%" }}
              id="outlined-asunto"
              label="¿Qué estás buscando?"
              placeholder="Selecciona una opción"
              name="asunto"
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value="" />
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              style={{ width: "100%" }}
              id="outlined-mensaje"
              label="Mensaje"
              placeholder="Ingresar el mensaje de consulta..."
              name="consulta"
              multiline
              rows={4}
            />
            <InputLabel variant="standard" htmlFor="consulta">
              {form.consulta ? `Caracteres: ${form.consulta.length}/900` : "Caracteres: 0/900"}
            </InputLabel>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleDeterminar}
              style={{ width: "100%" }}
              variant="contained"
            >
              Enviar Mensaje
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Mensaje enviado!
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Contacto;
