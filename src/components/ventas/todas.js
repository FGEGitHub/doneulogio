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
import Modificar from './modificar'
const columns = [
  { id: 'id_venta', label: 'ID Venta', minWidth: 100 },
  { id: 'fecha', label: 'Fecha de venta', minWidth: 120 },

  { id: 'nombre', label: 'Propietario', minWidth: 150 },
  { id: 'modelo_venta', label: 'Modelo de venta', minWidth: 150 },
  { id: 'valor_escritura', label: 'Valor escritura', minWidth: 100, align: 'right' },
  { id: 'observaciones', label: 'Observaciones', minWidth: 200 },
  { id: 'modificar', label: 'Modificar', minWidth: 100 },
  { id: 'borrar', label: 'Borrar', minWidth: 100 },
];
const formatCurrency = (value) => 
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
export default function VentasTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [datos, setDatos] = useState([]);
  const [nuevaVenta, setNuevaVenta] = useState(false);
  const [lotes, setLotes] = useState([]);
  const [propietarios, setPropietarios] = useState([]);
  const [options, setOptions] = useState({ modelo_venta: [] });
  const [editingRow, setEditingRow] = useState({ new: {} }); // Inicialización corregida

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

  const handleInputChange = (id, field, value) => {
    setEditingRow((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleNuevaVenta = () => {
    setNuevaVenta(true);
  };

  const handleGuardarNuevaVenta = async () => {
    const rta = await servicioDatos.nuevaVenta(editingRow.new);
    alert(rta);
    setNuevaVenta(false);
    await traerDatos();
  };

  return (
    <Paper sx={{  overflow: 'visible', margin: 'auto', marginTop: '150px' }}>
      <Button variant="contained" onClick={handleNuevaVenta} disabled={nuevaVenta}>
        Nueva Venta
      </Button>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 150px)' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}  style={{ minWidth: column.minWidth, fontWeight: 'bold', color: '#333' }}>
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
                  if (column.id === 'modificar') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {datos &&
                           <Modificar
                          id={row.id}
                          id_lote={row.id_lote}
                          manzana={row.manzana}
                          sector={row.sector}
                          lote={row.lote}
                          id_cliente={row.id_cliente}
                          observaciones={row.observaciones}
                          modelo_venta={row.modelo_venta}
                          fecha={row.fecha}
                          valor_escritura={row.valor_escritura}
                          lotes={lotes}
                          propietario={row.nombre}
                          propietarios={propietarios}
                          traer={async () => {
                            const historial = await servicioDatos.traerVentas();
                            setDatos(historial[0]);
                            setLotes(historial[1]);
                            setPropietarios(historial[2]);
                          }}
                          />}
                      </TableCell>
                    );
                  }
                  if (column.id === 'borrar') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Borrar id={row.id} traer={traerDatos} />
                      </TableCell>
                    );
                  }
                  if (column.id === 'valor_escritura') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                      {formatCurrency(row.valor_escritura)}
                      </TableCell>
                    );
                  }
                  if (column.id === 'id_venta') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                      {row.sector} - {row.manzana} - {row.lote}
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
 
    </Paper>
  );
}
