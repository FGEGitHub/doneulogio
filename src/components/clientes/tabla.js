import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import servicioDatos from '../../services/datos'
const columns = [
  { id: 'nombre', label: 'nombre', minWidth: 170 },
  
  {
    id: 'telefono',
    label: 'telefono',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'correo',
    label: 'correo',
    minWidth: 170,
    align: 'superficie',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'sexo',
    label: 'sexo',
    minWidth: 170,
    align: 'superficie',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'provincia',
    label: 'provincia',
    minWidth: 170,
    align: 'superficie',
    format: (value) => value.toLocaleString('en-US'),
  },

];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [datos, setDatos] = useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  useEffect(() => {
    traer()

  }, []);
  const traer = async () => {
  
    const historial = await servicioDatos.traerclientes()


    setDatos(historial)
    // 

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
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: 'black' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datos ? <>
            {datos
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ color: 'white' }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}</>:<></>}
          </TableBody>
        </Table>
      </TableContainer>
      {datos ? <>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={datos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: 'white' }}
      /></>:<></>}
    </Paper>
  );
}
