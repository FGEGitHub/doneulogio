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
import Seleccionar from './asignarlote'
import Nuevo from './nuevo'
import Modificar from './modificar'

const columns = [
  { id: 'nombre', label: 'Nombre', minWidth: 170 },
  { id: 'telefono', label: 'Teléfono', minWidth: 170, align: 'right' },
  { id: 'correo', label: 'Correo', minWidth: 170, align: 'right' },
  { id: 'sexo', label: 'Sexo', minWidth: 170, align: 'right' },
  { id: 'provincia', label: 'Provincia', minWidth: 170, align: 'right' },
  { id: 'seleccionar', label: 'Seleccionar', minWidth: 170, align: 'right' },
  { id: 'modificar', label: 'Modificar', minWidth: 170, align: 'right' },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [datos, setDatos] = useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedClientId, setSelectedClientId] = useState(null);

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

  return (<> <div style={{ 
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer'
}}>
  <Nuevo
traer={async () => {
const historial = await servicioDatos.traerclientes();
setDatos(historial);
}} />
</div>
    <Paper sx={{ width: '90%', overflow: 'hidden', backgroundColor: '#1a393c', margin: 'auto' }}>
    
     
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ backgroundColor: 'black' }}>
            <TableRow>
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
            {datos ? (
              datos
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ color: 'white' }}>
                        {column.id === 'seleccionar' ? (
                          <Seleccionar
                            id={row.id}
                            traer={async () => {
                              const historial = await servicioDatos.traerclientes();
                              setDatos(historial);
                            }}
                          />
                        ) : column.id === 'modificar' ? (
                          <Modificar id={row.id}
                 
     
                          fecha_nac= {row.fecha_nac}
                          observaciones= {row.observaciones}
                         
                          nombre= {row.nombre}
                          correo= {row.correo}
                          dni= {row.dni}
                        
                  
                          telefono= {row.telefono}
                          provincia= {row.provincia}
                          sexo= {row.sexo}
                          estado_civil= {row.estado_civil}
                          traer={async () => {
                            const historial = await servicioDatos.traerclientes();
                            setDatos(historial);
                          }}
                    />
                        ) : (
                          column.format && typeof value === 'number' ? column.format(value) : value
                        )}
                      </TableCell>
                      );
                    })}
                  </TableRow>
                ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedClientId && (
        <Seleccionar clientId={selectedClientId} onClose={() => setSelectedClientId(null)} />
      )}
      {datos ? (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={datos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Clientes por página"
          sx={{ color: 'white' }}
        />
      ) : (
        <></>
      )}
      
    </Paper> </>
  );
}
