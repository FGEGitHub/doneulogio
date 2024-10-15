import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import servicioDatos from '../../services/datos';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WarningIcon from '@mui/icons-material/Warning';

const columns = [
  { id: 'sector', label: 'Sector', minWidth: 100 },
  { id: 'manzana', label: 'Manzana', minWidth: 60, align: 'right' },
  { id: 'lote', label: 'Lote', minWidth: 100, align: 'right' },
  { id: 'superficie', label: 'Superficie', minWidth: 100, align: 'right' },
  { id: 'precio', label: 'P. Contado', minWidth: 100, align: 'right' },
  { id: 'preciofinanciado', label: 'P. Financiado', minWidth: 100, align: 'right' },
  { id: 'porcentaje_anticipo', label: 'Porcentaje Anticipo', minWidth: 150, align: 'right' },
  { id: 'anticipo', label: 'Anticipo', minWidth: 150, align: 'right' },
  { id: 'saldo_financiado', label: 'Saldo Financiado', minWidth: 150, align: 'right' },
  { id: 'cantidad_cuotas', label: 'Cantidad de Cuotas', minWidth: 150, align: 'center' },
  { id: 'estado', label: 'Estado', minWidth: 100, align: 'right' },
  { id: 'nombre', label: 'Propietario', minWidth: 100, align: 'right' },
  { id: 'posecion', label: 'Posesión', minWidth: 100, align: 'center' },
  { id: 'escritura', label: 'Escritura', minWidth: 100, align: 'center' },
  { id: 'construccion', label: 'Construcción', minWidth: 100, align: 'center' },
  { id: 'modificar', label: 'Acciones', minWidth: 100, align: 'center' },
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [datos, setDatos] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editingRow, setEditingRow] = useState({});
  const [modifiedRows, setModifiedRows] = useState([]);

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

  const handleInputChange = (id, field, value) => {
    setEditingRow((prev) => {
      const updatedRow = {
        ...prev[id],
        [field]: value,
      };
console.log(updatedRow)
      // Calcular anticipo y saldo financiado cuando porcentaje_anticipo o preciofinanciado cambian
      if (field === 'porcentaje_anticipo' || field === 'preciofinanciado' ||  field === 'porcentaje_anticipo' ) {
        const porcentajeAnticipo = parseFloat(updatedRow.porcentaje_anticipo || 0);
        const precioFinanciado = parseFloat(updatedRow.preciofinanciado || 0);
        
        // Calcular anticipo y saldo financiado
        const anticipo = (porcentajeAnticipo * precioFinanciado) / 100;
        const saldoFinanciado = precioFinanciado - anticipo;

        updatedRow.anticipo = anticipo.toFixed(2); // Redondear a 2 decimales
        updatedRow.saldo_financiado = saldoFinanciado.toFixed(2); // Redondear a 2 decimales
      }

      return {
        ...prev,
        [id]: updatedRow,
      };
    });

    if (!modifiedRows.includes(id)) {
      setModifiedRows((prev) => [...prev, id]);
    }
  };

  const handleQuantityChange = (id, delta) => {
    setEditingRow((prev) => {
      const currentValue = prev[id]?.cantidad_cuotas || datos.find((row) => row.lote === id).cantidad_cuotas;
      const newValue = Math.max(currentValue + delta, 0);
      return {
        ...prev,
        [id]: { ...prev[id], cantidad_cuotas: newValue },
      };
    });
    if (!modifiedRows.includes(id)) {
      setModifiedRows((prev) => [...prev, id]);
    }
  };

  const handleCheckboxChange = (id, field, checked) => {
    setEditingRow((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: checked ? 'Si' : 'No' },
    }));
    if (!modifiedRows.includes(id)) {
      setModifiedRows((prev) => [...prev, id]);
    }
  };

  const handleSubmit = async (row) => {
    const updatedRow = {
      ...row,
      ...editingRow[row.lote],
    };
    console.log(updatedRow)
    await servicioDatos.enviarformlotes(updatedRow);
    alert('Realizado');
    setEditingRow((prev) => {
      const newEditing = { ...prev };
      delete newEditing[row.lote];
      return newEditing;
    });
    setModifiedRows((prev) => prev.filter((id) => id !== row.lote));
    await traerDatos();
  };

  return (
    <Paper sx={{ width: '90%', overflow: 'hidden', margin: 'auto', height: '90vh', marginTop: '150px' }}>
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
            {datos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              const isModified = modifiedRows.includes(row.lote);
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.lote}
                  style={{ backgroundColor: isModified ? '#ffeb3b' : 'transparent' }}
                >
                  {columns.map((column) => {
                    let value = row[column.id];
                    const isEditing = editingRow[row.lote] && editingRow[row.lote][column.id] !== undefined;

                    if (column.id === 'estado') {
                      value = row['id_cliente'] ? 'Vendido' : 'Disponible';
                    }

                    if (column.id === 'precio' || column.id === 'preciofinanciado' || column.id === 'porcentaje_anticipo') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <input
                            value={isEditing ? editingRow[row.lote][column.id] : value}
                            onChange={(e) => handleInputChange(row.lote, column.id, e.target.value)}
                          />
                        </TableCell>
                      );
                    }
                    if (column.id === 'saldo_financiado') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {isEditing ? editingRow[row.lote].saldo_financiado : row.preciofinanciado-(row.porcentaje_anticipo*row.preciofinanciado/100)}
                        </TableCell>
                      );
                    }
                    if (column.id === 'anticipo') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {isEditing ? ((editingRow[row.lote].porcentaje_anticipo ?editingRow[row.lote].porcentaje_anticipo : row.porcentaje_anticipo) *  (editingRow[row.lote].preciofinanciado ?  editingRow[row.lote].preciofinanciado: row.preciofinanciado)    /100  ) : (row.porcentaje_anticipo*row.preciofinanciado/100)}
                        </TableCell>
                      );
                    }
                    if (column.id === 'posecion' || column.id === 'escritura' || column.id === 'construccion') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Checkbox
                            checked={isEditing ? editingRow[row.lote][column.id] === 'Si' : value === 'Si'}
                            onChange={(e) => handleCheckboxChange(row.lote, column.id, e.target.checked)}
                          />
                        </TableCell>
                      );
                    }

                    if (column.id === 'cantidad_cuotas') {
                      const cuotasValue = isEditing
                        ? editingRow[row.lote][column.id]
                        : value || 0;
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <IconButton onClick={() => handleQuantityChange(row.lote, -1)}>
                            <RemoveIcon />
                          </IconButton>
                          {cuotasValue}
                          <IconButton onClick={() => handleQuantityChange(row.lote, 1)}>
                            <AddIcon />
                          </IconButton>
                          {isModified && <WarningIcon style={{ marginLeft: '8px', color: 'red' }} />}
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
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
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
