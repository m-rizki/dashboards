import React from "react";
import { useRouter } from "next/router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

export default function CDashboardMainListItem() {
  const router = useRouter();
  return (
    <Tooltip title="Dashboard" placement="right">
      <ListItemButton
        onClick={() => router.push("/dashboard")}
        selected={router.pathname === "/dashboard"}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Tooltip>
  );
}
