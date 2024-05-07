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
    //const usuario  = useUser().userContext
    const [form, setForm] = useState({

        id: props.id,
    })
    const [datos, setDatos] = useState()
    const [activo, setActivo] = useState(false)



    const traer = async () => {

        const historial = await servicioDatos.traerventa(props.id)
        setForm(  {
            id: props.id,
            posecion:historial.posecion,
            escritura:historial.escritura,
            consctruccion:historial.consctruccion,
        })

        setDatos(historial)
        // 

    };



    const handleChange = (e) => {
        console.log(form)
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const handleClickOpen = () => {

        setOpen(true);
        traer()

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeterminar = async (event) => {

        try {
            event.preventDefault();

            const nov = await servicioDatos.actualizarventa(form)
            alert(nov)
        } catch (error) {
            console.error(error);
            console.log('Error algo sucedio')


        }
  
      
        setOpen(false);
    };

    const [currency, setCurrency] = React.useState('EUR');

    /*   const handleChange = (event) => {
        setCurrency(event.target.value);
      }; */


    return (




        <Box

            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            < Tooltip title="Venta">
                <Button variant="contained" onClick={handleClickOpen}> detalles </Button>

            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>


                    <h3>
                        <b> Datos de venta</b></h3>

                    {datos ? <>
                        <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                            <Typography variant="p" component="div" color="black">
                                <StyledParagraph>
                                    Escritura
                                </StyledParagraph>
                            </Typography>
                        </InputLabel>
                        <NativeSelect
                            defaultValue={datos.escritura}
                            onChange={handleChange}
                            inputProps={{
                                name: 'escritura',
                                id: 'uncontrolled-native',
                            }}
                            sx={'width:250px'}
                        >
                            <option value={datos.escritura}>{datos.escritura} </option>
                            <option value={'Si'}>Si </option>
                            <option value={'No'}>No </option>

                        </NativeSelect>
                        <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                            <Typography variant="p" component="div" color="black">
                                <StyledParagraph>
                                    Posecion
                                </StyledParagraph>
                            </Typography>
                        </InputLabel>
                        <NativeSelect
                            defaultValue={datos.posecion}
                            onChange={handleChange}
                            inputProps={{
                                name: 'posecion',
                                id: 'uncontrolled-native',
                            }}
                            sx={'width:250px'}
                        >
                            <option value={datos.posecion}>{datos.posecion} </option>
                            <option value={'Si'}>Si </option>
                            <option value={'No'}>No </option>

                        </NativeSelect>
                        <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                            <Typography variant="p" component="div" color="black">
                                <StyledParagraph>
                                    Construccion
                                </StyledParagraph>
                            </Typography>
                        </InputLabel>
                        <NativeSelect
                            defaultValue={datos.consctruccion}
                            onChange={handleChange}
                            inputProps={{
                                name: 'consctruccion',
                                id: 'uncontrolled-native',
                            }}
                            sx={'width:250px'}
                        >
                            <option value={datos.consctruccion}>{datos.consctruccion} </option>
                            <option value={'Si'}>Si </option>
                            <option value={'No'}>No </option>

                        </NativeSelect>

                    </> : <></>}


                    <DialogActions>


                        <>
                            <Button variant="contained" color="primary" onClick={handleDeterminar}> asignar </Button>
                        </>
                        <Button variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
                    </DialogActions>


                </DialogContent>
            </Dialog>
        </Box >


    );
}