import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import ButtonAppBar from "./components/Heading";
import ChartCard from "./components/Chart";
import SalesCard from "./components/SalesData";
import ExpensesCard from "./components/ExpensesData";
import Overview from "./components/Overview";
import Stack from "@mui/material/Stack";
import Resources from "./components/Resources";
import CompanyResources from "./components/CompanyResources";

import Divider from "@mui/material/Divider";
import "./App.css";

function App() {
  return (
    <>
      <div id="dashboard">
        <container id="headerContainer">
          <ButtonAppBar />
        </container>
      </div>
      <Stack>
        <Overview></Overview>
      </Stack>
      <Divider sx={{ m: 3 }} flexItem />
      <h2>Financial </h2>
      <Stack
        sx={{ marginLeft: "30px" }}
        spacing={2}
        direction="row"
        flexWrap="nowrap"
        justifyContent="left"
      >
        <ChartCard />
        <Divider orientation="vertical" flexItem />
        <SalesCard />
        <Divider orientation="vertical" flexItem />
        <ExpensesCard />
      </Stack>
      <Divider sx={{ m: 3 }} flexItem />
      <h2>Resources</h2>
      <Stack
        sx={{ maxWidth: 1200, marginLeft: "30px" }}
        spacing={3}
        direction="row"
        flexWrap="nowrap"
      >
        <CompanyResources></CompanyResources>
        <br />
        <Divider orientation="vertical" flexItem />
        <Resources></Resources>
      </Stack>
    </>
  );
}

export default App;
