import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
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
  const [page, setPage] = useState(0);
  const [datos, setDatos] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editingRow, setEditingRow] = useState(null); // Estado para la fila que está siendo editada
  const [modifiedData, setModifiedData] = useState({}); // Estado para almacenar los datos modificados

  useEffect(() => {
    traer();
  }, []);

  const traer = async () => {
    const historial = await servicioDatos.traerclientes();
    setDatos(historial);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => {
    setEditingRow(id); // Activar modo edición para la fila seleccionada
    const currentRow = datos.find((row) => row.id_cliente === id);
    setModifiedData(currentRow); // Cargar los datos actuales para modificar
  };

  const handleSave = async (id) => {
    // Enviar los datos modificados al servidor
    await servicioDatos.actualizarCliente(id, modifiedData);
    setEditingRow(null); // Desactivar modo edición
    traer(); // Volver a cargar los datos
  };

  const handleCancel = () => {
    setEditingRow(null); // Cancelar la edición y restablecer los cambios
  };

  const handleChange = (field, value) => {
    // Actualizar los datos modificados en el estado
    setModifiedData({ ...modifiedData, [field]: value });
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#f5f5f5', margin: 'auto' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
              {datos
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
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
                      // Si la fila está en modo de edición
                      if (editingRow === row.id_cliente) {
                        // Campos desplegables
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
                                    <MenuItem value="Catamarca">Catamarca</MenuItem>
                                    <MenuItem value="Chaco">Chaco</MenuItem>
                                    <MenuItem value="Chubut">Chubut</MenuItem>
                                    <MenuItem value="Córdoba">Córdoba</MenuItem>
                                    <MenuItem value="Corrientes">Corrientes</MenuItem>
                                    <MenuItem value="Entre Ríos">Entre Ríos</MenuItem>
                                    <MenuItem value="Formosa">Formosa</MenuItem>
                                    <MenuItem value="Jujuy">Jujuy</MenuItem>
                                    <MenuItem value="La Pampa">La Pampa</MenuItem>
                                    <MenuItem value="La Rioja">La Rioja</MenuItem>
                                    <MenuItem value="Mendoza">Mendoza</MenuItem>
                                    <MenuItem value="Misiones">Misiones</MenuItem>
                                    <MenuItem value="Neuquén">Neuquén</MenuItem>
                                    <MenuItem value="Río Negro">Río Negro</MenuItem>
                                    <MenuItem value="Salta">Salta</MenuItem>
                                    <MenuItem value="San Juan">San Juan</MenuItem>
                                    <MenuItem value="San Luis">San Luis</MenuItem>
                                    <MenuItem value="Santa Cruz">Santa Cruz</MenuItem>
                                    <MenuItem value="Santa Fe">Santa Fe</MenuItem>
                                    <MenuItem value="Santiago del Estero">Santiago del Estero</MenuItem>
                                    <MenuItem value="Tierra del Fuego">Tierra del Fuego</MenuItem>
                                    <MenuItem value="Tucumán">Tucumán</MenuItem>
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
                        // Modo de solo lectura
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={datos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Clientes por página"
          sx={{ color: 'black' }}
        />
      </Paper>
    </>
  );
}
