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
import Borrar from './borrar';

const columns = [
  { id: 'id_venta', label: 'ID Venta', minWidth: 100 },
  { id: 'fecha', label: 'Fecha de venta', minWidth: 120 },
  { id: 'lote', label: 'Lote', minWidth: 100 },
  { id: 'nombre', label: 'Propietario', minWidth: 150 },
  { id: 'modelo_venta', label: 'Modelo de venta', minWidth: 150 },
  { id: 'valor_escritura', label: 'Valor escritura', minWidth: 100, align: 'right' },
  { id: 'observaciones', label: 'Observaciones', minWidth: 200 },
  { id: 'modificar', label: 'Modificar', minWidth: 100 },
  { id: 'borrar', label: 'Borrar', minWidth: 100 },
];

export default function VentasTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [datos, setDatos] = useState([]);
  const [lotes, setLotes] = useState([]);
  const [propietarios, setPropietarios] = useState([]);
  const [editingRow, setEditingRow] = useState({});
  const [nuevaVenta, setNuevaVenta] = useState(false);
  const [options, setOptions] = useState({ modelo_venta: [] });

  useEffect(() => {
    traerDatos();
    traerOpciones();
  }, []);

  const traerDatos = async () => {
    const historial = await servicioDatos.traerVentas();
    setDatos(historial[0]);
    setLotes(historial[1]);
    setPropietarios(historial[2]);
  };

  const traerOpciones = async () => {
    const opcionesModeloVenta = ['Contado', 'Financiado'];
    setOptions({ modelo_venta: opcionesModeloVenta });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleInputChange = (id, field, value) => {
    setEditingRow((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const handleEditClick = (rowId) => {
    setEditingRow((prev) => ({
      ...prev,
      [rowId]: datos.find((row) => row.id_venta === rowId) || {},
    }));
  };

  const handleSaveClick = async (row) => {
    const updatedRow = { ...row, ...editingRow[row.id_venta] };
    await servicioDatos.modificarVenta(updatedRow);
    alert('Venta modificada');
    setEditingRow((prev) => {
      const newEditing = { ...prev };
      delete newEditing[row.id_venta];
      return newEditing;
    });
    await traerDatos();
  };

  const handleNuevaVenta = () => {
    setNuevaVenta(true);
    setEditingRow({ new: {} });
  };

  const handleGuardarNuevaVenta = async () => {
    await servicioDatos.nuevaVenta(editingRow.new);
    alert('Nueva venta agregada');
    setNuevaVenta(false);
    setEditingRow({});
    await traerDatos();
  };

  return (
    <Paper sx={{ width: '90%', overflow: 'hidden', margin: 'auto', height: '90vh', marginTop: '50px' }}>
      <Button variant="contained" onClick={handleNuevaVenta} disabled={nuevaVenta}>
        Nueva Venta
      </Button>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 150px)' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {nuevaVenta && (
              <TableRow hover role="checkbox" tabIndex={-1}>
                {columns.map((column) => {
                  if (column.id === 'modificar') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Button variant="contained" onClick={handleGuardarNuevaVenta}>
                          Guardar
                        </Button>
                      </TableCell>
                    );
                  }
                  if (column.id === 'lote') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Select
                          value={editingRow.new[column.id] || ''}
                          onChange={(e) => handleInputChange('new', column.id, e.target.value)}
                        >
                          {lotes.map((lote) => (
                            <MenuItem key={lote.id} value={lote.id}>
                              {`${lote.sector} - ${lote.manzana} - ${lote.lote}`}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    );
                  }
                  if (column.id === 'nombre') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Select
                          value={editingRow.new[column.id] || ''}
                          onChange={(e) => handleInputChange('new', column.id, e.target.value)}
                        >
                          {propietarios.map((prop) => (
                            <MenuItem key={prop.id} value={prop.id}>
                              {prop.nombre}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    );
                  }
                  if (column.id === 'modelo_venta') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Select
                          value={editingRow.new[column.id] || ''}
                          onChange={(e) => handleInputChange('new', column.id, e.target.value)}
                        >
                          {options.modelo_venta.map((modelo) => (
                            <MenuItem key={modelo} value={modelo}>
                              {modelo}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={column.id} align={column.align}>
                      <input
                        type="text"
                        value={editingRow.new[column.id] || ''}
                        onChange={(e) => handleInputChange('new', column.id, e.target.value)}
                      />
                    </TableCell>
                  );
                })}
              </TableRow>
            )}

{datos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id_venta}>
                {columns.map((column) => {
                  const value = row[column.id];
                  const isEditing = editingRow[row.id_venta];

                  if (column.id === 'modificar') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {isEditing ? (
                          <Button variant="contained" onClick={() => handleSaveClick(row)}>
                            Guardar
                          </Button>
                        ) : (
                          <Button variant="outlined" onClick={() => handleEditClick(row.id_venta)}>
                            Modificar
                          </Button>
                        )}
                      </TableCell>
                    );
                  }

                  if (isEditing && (column.id === 'modelo_venta' || column.id === 'valor_escritura' || column.id === 'fecha' || column.id === 'observaciones')) {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <input
                          type="text"
                          value={editingRow[row.id_venta][column.id] || ''}
                          onChange={(e) => handleInputChange(row.id_venta, column.id, e.target.value)}
                        />
                      </TableCell>
                    );
                  }

                  if (isEditing && column.id === 'lote') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Select
                          value={editingRow[row.id_venta][column.id] || ''}
                          onChange={(e) => handleInputChange(row.id_venta, column.id, e.target.value)}
                        >
                          {lotes.map((lote) => (
                            <MenuItem key={lote.id} value={lote.id}>
                              {`${lote.sector} - ${lote.manzana} - ${lote.lote}`}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    );
                  }

                  if (isEditing && column.id === 'nombre') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Select
                          value={editingRow[row.id_venta][column.id] || ''}
                          onChange={(e) => handleInputChange(row.id_venta, column.id, e.target.value)}
                        >
                          {propietarios.map((prop) => (
                            <MenuItem key={prop.id} value={prop.id}>
                              {prop.nombre}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
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
      />
    </Paper>
  );
}
