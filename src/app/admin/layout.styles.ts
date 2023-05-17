import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

const dashboardContainerStyle:CSSProperties|undefined  = {
    minHeight:'100%',
    width:'100%',
    borderTop:1,
    borderLeft:1,
    borderColor:'secondary.main',
};


const DashboardLayoutStyles = {dashboardContainerStyle,}

export default DashboardLayoutStyles;