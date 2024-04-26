import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagen from "../../Assets/doneu3.png"
export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Agregar enlaces
        </Typography>
        <Typography variant="body2" color="text.secondary">
        agregar desccripcion 3
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Boton 1</Button>
        <Button size="small">Boton 2</Button>
      </CardActions>
    </Card>
  );
}
