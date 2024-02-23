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
          image="https://spreadsheetpage.com/wp-content/uploads/2017/06/Sales-Chart-One-Target-Bar-1024x526.jpg"
          alt="Annual Expenses"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Annual Expenses Data
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Expenses from Jan - Dec FY
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
