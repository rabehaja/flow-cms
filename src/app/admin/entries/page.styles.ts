
import { SxProps, Theme } from "@mui/material";
import { transform } from "typescript";

const entriesDrawerStyle:SxProps<Theme> = {
minHeight:'100vh',
padding:2,
borderRight:1,
borderColor:'primary.main !important',
// backgroundColor:'background.default',
flexGrow:0
};

const entriesMainPanelStyle:SxProps<Theme> = {
    minHeight:'100vh',
    flexGrow:1

};

const entriesMainPanelHeader:SxProps<Theme> = {
    backgroundColor:'background.default'
};

const tableRowStyle:SxProps<Theme> = {
    color:'text.secondary'
}
 const EntriesPageStyles = {entriesDrawerStyle, tableRowStyle, entriesMainPanelStyle, entriesMainPanelHeader};

 export default EntriesPageStyles;