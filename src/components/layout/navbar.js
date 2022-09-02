import React from "react";
import Divider from "@mui/material/Divider";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

function navbar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        background: "#1C2430",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "#1C2430",
          boxSizing: "border-box",
          color: "#fff",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div
        style={{
          background: "#232F3E",
          color: "#fff",
          padding: "0 20px 0 20px",
        }}
      >
        <p>Test</p>
      </div>
      <Divider />
      <div style={{ padding: "10px 20px 10px 20px" }}>
        <p style={{ margin: 0 }}>List Menu</p>
      </div>
      <div style={{ padding: "7px 19px 5px 19px", background: "#1C1C1C", display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <WarehouseIcon />
        <p>List Item Warehouse</p>
      </div>
    </Drawer>
  );
}

export default React.memo(navbar);
