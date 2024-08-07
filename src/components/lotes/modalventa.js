import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import Tooltip from '@mui/material/Tooltip';
import { Paper, CircularProgress, Typography, Card, CardActions } from '@mui/material';
import React, { useEffect, useState, Fragment } from "react";
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';
import servicioDatos from '../../services/datos'

const StyledParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
`;

export default function SelectTextFields(props) {
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({
        id: props.id,
    });
    const [datos, setDatos] = useState(null);
    const [activo, setActivo] = useState(false);

    const traer = async () => {
        const historial = await servicioDatos.traerventa(props.id);
        setForm({
            id: props.id,
            posecion: historial.posecion,
            escritura: historial.escritura,
            consctruccion: historial.consctruccion,
        });
        setDatos(historial);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleClickOpen = () => {
        setOpen(true);
        traer();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeterminar = async (event) => {
        try {
            event.preventDefault();
            const nov = await servicioDatos.actualizarventa(form);
            alert(nov);
        } catch (error) {
            console.error(error);
            console.log('Error algo sucedio');
        }
        setOpen(false);
    };

    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Tooltip title="Venta">
                <button  onClick={handleClickOpen}>Actualizar</button>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Typography variant="h5" gutterBottom><b>Datos de venta</b></Typography>
                    {datos ? (
                        <>
                            {['escritura', 'posecion', 'consctruccion'].map((field) => (
                                <Fragment key={field}>
                                    <InputLabel htmlFor={`${field}-select`}>
                                        <StyledParagraph>{field.charAt(0).toUpperCase() + field.slice(1)}</StyledParagraph>
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue={datos[field]}
                                        onChange={handleChange}
                                        inputProps={{
                                            name: field,
                                            id: `${field}-select`,
                                        }}
                                        sx={{ width: '100%', mb: 2 }}
                                    >
                                        <option value={datos[field]}>{datos[field]}</option>
                                        <option value={'Si'}>Si</option>
                                        <option value={'No'}>No</option>
                                    </NativeSelect>
                                </Fragment>
                            ))}
                     
                        </>
                    ) : (
                        <CircularProgress />
                    )}
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={handleDeterminar}>Asignar</Button>
                        <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
