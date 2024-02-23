import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TransactionData from "./TransactionData";
import { Divider } from "@mui/material";

export default function Overview() {
  return (
    <>
      <h2>Overview</h2>
      <Box
        component="section"
        sx={{
          display: "flex",
          m: 2.5,
          p: 2,
          border: "1px dashed grey",
        }}
      >
        <Card sx={{ minWidth: 900, alignItems: "center" }}>
          <CardMedia
            sx={{ height: 400 }}
            image="https://www.intrafocus.com/wp-content/uploads/2023/10/KPI-Dashboard-Financial.jpg"
            title="financialKPI"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              padding="5px"
              backgroundColor="blanchedalmond"
            >
              KPI Snapshot
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
        <Divider orientation="vertical" flexItem sx={{ m: 3 }} />
        <TransactionData></TransactionData>
        <Box></Box>
      </Box>
    </>
  );
}
