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
import servicioDatos from '../../services/datos';

const columns = [
  { id: 'id_venta', label: 'ID Venta', minWidth: 100 },
  { id: 'fecha_venta', label: 'Fecha de venta', minWidth: 120 },
  { id: 'lote', label: 'Lote', minWidth: 100 },
  { id: 'nombre', label: 'Propietario', minWidth: 150 },
  { id: 'modelo_venta', label: 'Modelo de venta', minWidth: 150 },
  { id: 'valor_escritura', label: 'Valor escritura', minWidth: 100, align: 'right' },
  { id: 'observaciones', label: 'Observaciones', minWidth: 200 },
  { id: 'modificar', label: 'Modificar', minWidth: 100 },
];

export default function VentasTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [datos, setDatos] = useState([]);
  const [lotes, setLotes] = useState([]); // Cambié el estado para solo lotes
  const [editingRow, setEditingRow] = useState({});
  const [nuevaVenta, setNuevaVenta] = useState(false);
  const [options, setOptions] = useState({
    lote: [],
    propietario: [],
    modelo_venta: []
  });

  useEffect(() => {
    traerDatos();
    traerOpciones();
  }, []);

  const traerDatos = async () => {
    const historial = await servicioDatos.traerVentas();
    setDatos(historial[0]);
    setLotes(historial[1]); // Cargar los lotes desde el servicio
  };

  const traerOpciones = async () => {
    // Simulación de opciones traídas de una API
    const opcionesLote = ['56', '76'];
    const opcionesPropietario = ['Nombre y Apellido 1', 'Nombre y Apellido 2'];
    const opcionesModeloVenta = ['Contado', 'Financiado'];
    setOptions({
      lote: opcionesLote,
      propietario: opcionesPropietario,
      modelo_venta: opcionesModeloVenta,
    });
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

  const handleSubmit = async (row) => {
    const updatedRow = {
      ...row,
      ...editingRow[row.id_venta],
    };
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
      <button onClick={handleNuevaVenta} disabled={nuevaVenta}>
        Nueva Venta
      </button>
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
                        <button onClick={handleGuardarNuevaVenta}>Guardar</button>
                      </TableCell>
                    );
                  }

                  if (['lote', 'propietario', 'modelo_venta'].includes(column.id)) {
                    const optionsList = options[column.id] || [];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Select
                          value={editingRow.new[column.id] || ''}
                          onChange={(e) => handleInputChange('new', column.id, e.target.value)}
                        >
                          {lotes && lotes.length > 0 ? (
                            lotes.map((lote) => (
                              <MenuItem key={lote} value={lote}>{lote}</MenuItem>
                            ))
                          ) : (
                            <MenuItem value="" disabled>Cargando lotes...</MenuItem>
                          )}
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
                  const isEditing = editingRow[row.id_venta] && editingRow[row.id_venta][column.id] !== undefined;
                  if (column.id === 'id_venta') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {`${row.sector} - ${row.manzana} - ${row.lote}`} {/* Concatenar id_venta con propietario */}
                      </TableCell>
                    );
                  }
                  if (['lote', 'propietario', 'modelo_venta'].includes(column.id)) {
                    const optionsList = options[column.id] || [];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {isEditing ? (
                          <Select
                            value={editingRow[row.id_venta][column.id] || ''}
                            onChange={(e) => handleInputChange(row.id_venta, column.id, e.target.value)}
                          >
                            {lotes && lotes.length > 0 ? (
                              lotes.map((lote) => (
                                <MenuItem key={lote} value={lote}>{lote}</MenuItem>
                              ))
                            ) : (
                              <MenuItem value="" disabled>Cargando lotes...</MenuItem>
                            )}
                          </Select>
                        ) : (
                          value // Mostrar el valor directamente cuando no está en modo de edición
                        )}
                      </TableCell>
                    );
                  }

                  if (column.id === 'modificar') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <button onClick={() => handleSubmit(row)}>Modificar</button>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={column.id} align={column.align}>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editingRow[row.id_venta][column.id] || ''}
                          onChange={(e) => handleInputChange(row.id_venta, column.id, e.target.value)}
                        />
                      ) : (
                        value // Mostrar el valor directamente cuando no está en modo de edición
                      )}
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
