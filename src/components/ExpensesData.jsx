import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ExpensesCard() {
  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sony_Mobile_sales_graph.svg/640px-Sony_Mobile_sales_graph.svg.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Annual Expenses Data
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Overall sales from 2004 to 2017
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Expand
        </Button>
      </CardActions>
    </Card>
  );
}
