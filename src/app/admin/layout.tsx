"use client";

import Header from "@/components/admin/Header/Header";
import Sidebar from "@/components/admin/Sidebar/Sidebar";
import { Mail } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton } from "@mui/material";
import { borderLeft } from "@mui/system";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Box display={"flex"}>
        <Sidebar />
        <Box
          sx={{
            minHeight: "100%",
            minWidth: "100%",
           
            borderTop:1,
            borderTopColor:"primary.main",
            borderLeft:1,
            borderLeftColor:"primary.main"
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
