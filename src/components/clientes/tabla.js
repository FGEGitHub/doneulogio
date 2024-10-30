import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import servicioDatos from '../../services/datos';

const columns = [
  { id: 'id_cliente', label: 'ID Clientes', minWidth: 100, align: 'left' },
  { id: 'nombre', label: 'Clientes', minWidth: 170, align: 'left' },
  { id: 'telefono', label: 'Teléfono', minWidth: 170, align: 'left' },
  { id: 'correo', label: 'Correo', minWidth: 200, align: 'left' },
  { id: 'fecha_nac', label: 'Fecha de Nac.', minWidth: 150, align: 'center' },
  { id: 'edad', label: 'Edad', minWidth: 50, align: 'center' },
  { id: 'estado_civil', label: 'Estado civil', minWidth: 150, align: 'center' },
  { id: 'sexo', label: 'Sexo', minWidth: 100, align: 'center' },
  { id: 'provincia', label: 'Provincia', minWidth: 150, align: 'center' },
  { id: 'modificar', label: 'Modificar', minWidth: 100, align: 'center' },
];

export default function StickyHeadTable() {
  const [datos, setDatos] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [modifiedData, setModifiedData] = useState({});

  useEffect(() => {
    traer();
  }, []);

  const traer = async () => {
    const historial = await servicioDatos.traerclientes();
    setDatos(historial);
  };

  const handleEdit = (id) => {
    setEditingRow(id);
    const currentRow = datos.find((row) => row.id_cliente === id);
    setModifiedData(currentRow);
  };

  const handleSave = async (id) => {
    await servicioDatos.actualizarCliente(id, modifiedData);
    setEditingRow(null);
    traer();
  };

  const handleCancel = () => {
    setEditingRow(null);
  };

  const handleChange = (field, value) => {
    setModifiedData({ ...modifiedData, [field]: value });
  };

  return (
    <>
     <Paper sx={{   /*width: '100%',*/  overflow: 'visible', backgroundColor: '#f5f5f5', marginTop: '1200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column-reverse', overflowX: 'auto' }}>
          <TableContainer sx={{ maxHeight: '100%' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: 'bold', color: '#333' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {datos.map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id_cliente}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'id_cliente') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            CLI-{row.id}
                          </TableCell>
                        );
                      }
                      if (editingRow === row.id_cliente) {
                        if (column.id === 'estado_civil' || column.id === 'provincia') {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Select
                                value={modifiedData[column.id] || ''}
                                onChange={(e) => handleChange(column.id, e.target.value)}
                                displayEmpty
                                style={{ width: '100%' }}
                              >
                                <MenuItem value="">Elegir</MenuItem>
                                {column.id === 'estado_civil' ? (
                                  <>
                                    <MenuItem value="Soltero">Soltero</MenuItem>
                                    <MenuItem value="Pareja">Pareja</MenuItem>
                                    <MenuItem value="Desconocido">Desconocido</MenuItem>
                                  </>
                                ) : (
                                  <>
                                    <MenuItem value="Buenos Aires">Buenos Aires</MenuItem>
                                    {/* Add other provinces as MenuItems */}
                                  </>
                                )}
                              </Select>
                            </TableCell>
                          );
                        }
                        if (column.id === 'modificar') {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                variant="contained"
                                color="success"
                                size="small"
                                onClick={() => handleSave(row.id_cliente)}
                              >
                                Guardar
                              </Button>
                              <Button
                                variant="outlined"
                                color="secondary"
                                size="small"
                                onClick={handleCancel}
                                style={{ marginLeft: '10px' }}
                              >
                                No Guardar
                              </Button>
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(modifiedData[column.id])
                              : modifiedData[column.id] || value}
                          </TableCell>
                        );
                      } else {
                        if (column.id === 'modificar') {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => handleEdit(row.id_cliente)}
                              >
                                Modificar
                              </Button>
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </>
  );
}
