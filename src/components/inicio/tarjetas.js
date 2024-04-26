import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagen from "../../Assets/doneu1.png"

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="imagen"
        height="300"
        image={imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Agregar enlaces
        </Typography>
        <Typography variant="body2" color="text.secondary">
          agregar desccripcion 1
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Boton 1</Button>
        <Button size="small">Boton 2</Button>
      </CardActions>
    </Card>
  );
}
