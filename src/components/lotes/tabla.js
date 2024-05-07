import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import servicioDatos from '../../services/datos';

const columns = [
  { id: 'sector', label: 'sector', minWidth: 100 },
  { id: 'manzana', label: 'manzana', minWidth: 60, align: 'right' },
  { id: 'lote', label: 'lote', minWidth: 100, align: 'right' },
  { id: 'superficie', label: 'superficie', minWidth: 100, align: 'right' },
  { id: 'estado', label: 'estado', minWidth: 100, align: 'right' },
  { id: 'nombre', label: 'nombre', minWidth: 100, align: 'right' },
  { id: 'id_lote', label: 'Ver detalles', minWidth: 100, align: 'right' },
];

const getColorForEstado = (estado) => {
  // Define tu lógica para asignar el color rojo según el estado
  return estado === 'Vendido' ? 'red' :  estado === 'Disponible' ? 'green' : 'initial';
};

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [datos, setDatos] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    traerDatos();
  }, []);

  const traerDatos = async () => {
    const historial = await servicioDatos.traerlotes();
  
    setDatos(historial);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '75%', overflow: 'hidden', backgroundColor: '#1a393c', margin: 'auto' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ backgroundColor: 'black' }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, color: 'black' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datos
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ color: column.id === 'estado' ? getColorForEstado(row[column.id]) : 'white' }}
                    >
                      {column.id === 'estado' ? <p style={{ color: getColorForEstado(row[column.id]) }}>{row[column.id]}</p> :column.id === 'id_lote' ? row[column.id] == null ? <>no</>:<>modal</> : row[column.id]}
                    </TableCell>
                  ))}
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
        sx={{ color: 'white' }}
      />
    </Paper>
  );
}
