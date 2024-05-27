import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import imagen from "../../Assets/doneu2.png"
export default function ImgMediaCard() {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={imagen}
        onClick={() => navigate('/masterplan')}

      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        Ver Master Plan
        </Typography>
        <Typography variant="body2" color="text.secondary">
        agregar desccripcion 2
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Boton 1</Button>
        <Button size="small">Boton 2</Button>
      </CardActions>
    </Card>
  );
}
