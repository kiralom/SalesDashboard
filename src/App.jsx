import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DrawerAppBar from "./components/Heading";
import ChartCard from "./components/Chart";
import SalesCard from "./components/SalesData";
import ExpensesCard from "./components/ExpensesData";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <container>
          <DrawerAppBar />
        </container>

        <container>
          <Sidebar />
        </container>

        <container>
          <ChartCard />
          <SalesCard />
          <ExpensesCard />
        </container>
      </div>
    </>
  );
}

export default App;
