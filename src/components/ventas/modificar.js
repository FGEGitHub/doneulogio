import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import servicioDatos from '../../services/datos';

function Modificar({id_cliente,id, traer, propietario,lote, idVenta, fecha, id_lote, nombre, sector, manzana, modeloVenta, valor_escritura, observaciones, lotes, propietarios, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [venta, setVenta] = useState({
    id,
    fecha,
    id_lote,
    nombre,
    modeloVenta,
    valor_escritura,
    observaciones,
    id_cliente
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (field, value) => {
    console.log(venta)
    setVenta((prev) => ({ ...prev, [field]: value }));
  };

  const handleGuardarCambios = async () => {
    try {
      // Agregar el idVenta al cuerpo del objeto venta
      const ventaConId = { ...venta, idVenta };
      
      const respuesta = await servicioDatos.modificarventa( venta);
      alert(respuesta.message );
      
      traer();
      handleClose();
    } catch (error) {
      console.error(error);
      alert('Hubo un error al modificar la venta.');
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Modificar Venta  
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Modificar Venta {`${sector} - ${manzana} - ${lote}`}<br/>
        {propietario}</DialogTitle>
        <DialogContent>
          <TextField
            label="Fecha"
            value={venta.fecha}
            onChange={(e) => handleInputChange('fecha', e.target.value)}
            fullWidth
            margin="normal"
          />
          Lote
          <Select
            label="Lote"
            value={venta.id_lote}
            onChange={(e) => handleInputChange('id_lote', e.target.value)}
            fullWidth
            margin="normal"
          >
            {lotes.map((l) => (
              <MenuItem key={l.id} value={l.id}>
                {`${l.sector} - ${l.manzana} - ${l.lote}`}
              </MenuItem>
            ))}
          </Select>
          Propietario
          <Select
            label="Propietario"
            value={nombre}
            onChange={(e) => handleInputChange('id_cliente', e.target.value)}
            fullWidth
            margin="normal"
          >
            {propietarios.map((p) => (
              <MenuItem key={p.id} value={p.id}>
                {p.nombre}
              </MenuItem>
            ))}
          </Select>
          <Select
            label="Modelo de Venta"
            value={venta.modeloVenta}
            onChange={(e) => handleInputChange('modeloVenta', e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Contado">Contado</MenuItem>
            <MenuItem value="Financiado">Financiado</MenuItem>
          </Select>
          <TextField
            label="Valor Escritura"
            value={venta.valor_escritura}
            onChange={(e) => handleInputChange('valor_escritura', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Observaciones"
            value={venta.observaciones}
            onChange={(e) => handleInputChange('observaciones', e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleGuardarCambios} color="primary" variant="contained">
            Guardar Cambios
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modificar;
