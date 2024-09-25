import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

// Datos ficticios de eventos del mes
const dataMensual = [
  { name: 'Semana 1', eventos: 400 },
  { name: 'Semana 2', eventos: 300 },
  { name: 'Semana 3', eventos: 500 },
  { name: 'Semana 4', eventos: 200 },
];

// Datos ficticios para el gráfico de torta
const dataTorta = [
  { name: 'Categoría A', value: 240 },
  { name: 'Categoría B', value: 130 },
  { name: 'Categoría C', value: 100 },
  { name: 'Categoría D', value: 80 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Estadisticas = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Estadísticas del Mes
        </Typography>

        {/* Gráfico de Línea */}
        <Typography variant="h6" gutterBottom>
          Eventos Semanales
        </Typography>
        <LineChart
          width={500}
          height={300}
          data={dataMensual}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="eventos" stroke="#8884d8" />
        </LineChart>

        {/* Gráfico de Torta */}
        <Typography variant="h6" gutterBottom>
          Distribución de Categorías
        </Typography>
        <PieChart width={400} height={400}>
          <Pie
            data={dataTorta}
            cx={200}
            cy={200}
            labelLine={false}
            label
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {dataTorta.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default Estadisticas;
