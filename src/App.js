import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Component
import Layout from "./components/layout/layout";
import ListWarehouse from "./page/listWarehouse";
import DetailWarehouse from "./page/detailWarehouse";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<ListWarehouse />} />
            <Route path="/detail/:id" element={<DetailWarehouse />} />
          </Routes>
        </Router>
      </Layout>
    </Box>
  );
};

export default App;
