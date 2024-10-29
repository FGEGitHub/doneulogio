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

function Modificar({ traer, lotemodificar, idlot, fecha, id_lote, nombre, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [lot, setlot] = useState({
 id:lotemodificar.id,
 sector:lotemodificar.sector,
 manzana:lotemodificar.manzana,
 lote:lotemodificar.lotemodificar,
 adrema:lotemodificar.adrema,
 construccion:lotemodificar.construccion,
 escritura:lotemodificar.escritura,
 id:lotemodificar.id,

  });

  const handleOpen = () => {setOpen(true)
    console.log(lotemodificar)
  };
  const handleClose = () => setOpen(false);

  const handleInputChange = (field, value) => {
    console.log(lot)
    setlot((prev) => ({ ...prev, [field]: value }));
  };

  const handleGuardarCambios = async () => {
    try {
      // Agregar el idlot al cuerpo del objeto lot
      const lotConId = { ...lot, idlot };
      
      const respuesta = await servicioDatos.enviarformlotes( lot);
      alert(respuesta.message );
      
      traer();
      handleClose();
    } catch (error) {
      console.error(error);
      alert('Hubo un error al modificar la lot.');
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Modificar lote  
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Modificar Lote {`${lotemodificar.sector} - ${lotemodificar.manzana} - ${lot.lote}`}<br/>
        </DialogTitle>
        <DialogContent>

            {lot? <>
          <TextField
            label="Sector"
            defaultValue={lotemodificar.sector}
            onChange={(e) => handleInputChange('sector', e.target.value)}
            fullWidth
            margin="normal"
          />
      Posecion   ({lotemodificar.posecion})
      <Select
            label="Posecion"
            defaultValue={lotemodificar.posecion}
            onChange={(e) => handleInputChange('posecion', e.target.value)}
            fullWidth
            margin="normal"
          >
        
              <MenuItem  value={"Si"}>
                Si
              </MenuItem>
              <MenuItem  value={"No"}>
              No
              </MenuItem>
         
          </Select>
          Escritura ({lotemodificar.escritura})
          <Select
            label="Escritura"
            defaultValue={lotemodificar.escritura}
            onChange={(e) => handleInputChange('escritura', e.target.value)}
            fullWidth
            margin="normal"
          >
        
              <MenuItem  value={"Si"}>
                Si
              </MenuItem>
              <MenuItem  value={"No"}>
              No
              </MenuItem>
         
          </Select>
        
          Construccion ({lotemodificar.construccion})
          
          <Select
            label="Construccion"
            defaultValue={lotemodificar.construccion}
            onChange={(e) => handleInputChange('construccion', e.target.value)}
            fullWidth
            margin="normal"
          >
        
              <MenuItem  value={"Si"}>
                Si
              </MenuItem>
              <MenuItem  value={"No"}>
              No
              </MenuItem>
         
          </Select>
          Adrema
          <TextField
            label="Adrema"
            defaultValue={lotemodificar.adrema}
            onChange={(e) => handleInputChange('adrema', e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
  Superficie
          <TextField
            label="Superficie"
            defaultValue={lotemodificar.superficie}
            onChange={(e) => handleInputChange('superficie', e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
            Precio Contado
          <TextField
            label="Precio contado"
            defaultValue={lotemodificar.precio}
            onChange={(e) => handleInputChange('precio', e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
            Precio financiado
          <TextField
            label="Precio Financiado "
            defaultValue={lotemodificar.preciofinanciado}
            onChange={(e) => handleInputChange('preciofinanciado', e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
             Porcentaje Anticipo
          <TextField
            label=" Porcentaje Anticipo"
            defaultValue={lotemodificar.cantidad_cuotas}
            onChange={(e) => handleInputChange('porcentaje_anticipo', e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
            Cantidad de cuotas
          <TextField
            label="     Cantidad de cuotas"
            defaultValue={lotemodificar.cantidad_cuotas}
            onChange={(e) => handleInputChange('cantidad_cuotas', e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
    
</>:<></>}

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
