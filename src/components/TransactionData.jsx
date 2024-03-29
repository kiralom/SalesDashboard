import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mockTransactions } from "../../data/mockData";

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "blue" }}>
              <h3>Customer</h3>
            </TableCell>
            <TableCell align="right" sx={{ color: "blue" }}>
              <h3>Date of Sale</h3>
            </TableCell>
            <TableCell align="right" sx={{ color: "blue" }}>
              <h3>Cost ($USD)</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockTransactions.map((trx) => (
            <TableRow
              key={trx.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {trx.user}
              </TableCell>
              <TableCell align="right">{trx.date}</TableCell>
              <TableCell align="right">{trx.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
