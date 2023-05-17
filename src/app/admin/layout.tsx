"use client";

import Header from "@/components/admin/Header/Header";
import Sidebar from "@/components/admin/Sidebar/Sidebar";
import { Mail } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton, NoSsr } from "@mui/material";
import DashboardLayoutStyles from "./layout.styles";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
      <NoSsr>
        <Header />
        <Box display={"flex"}>
          <Sidebar />
          <Box style={DashboardLayoutStyles.dashboardContainerStyle}>
            {children}
          </Box>
        </Box>
      </NoSsr>
    </>
  );
}
