"use client";
import { Add, Circle, Refresh, Search, SettingsOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Tabs,
  Tab,
  styled,
  InputBase} from "@mui/material";
import { useRef, useState } from "react";
import EntriesPageStyles from "./page.styles";
import MenuIcon from '@mui/icons-material/Menu';
import LeftMenu from "@/components/admin/Dashboard/LeftMenu";
import FilteredTable from "@/components/Data/Table/FilteredTable";


const StyledInputBase = styled(InputBase)(({ theme}) => ({
  color: 'inherit',

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

  },
}));

const Page = () => {
const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
const containerRef = useRef(null);
const handleDrawer = (event:React.MouseEvent<HTMLButtonElement>) =>{
  event.preventDefault();
  setIsDrawerOpen(prevVal => !prevVal);
  console.log(containerRef);
}
  return (
    <Box display="flex" flexDirection={"row"} ref={containerRef}>
         <Box sx={EntriesPageStyles.entriesDrawerStyle} display={isDrawerOpen?'block': 'none'}  >
          <Typography variant="h5">Content types </Typography>
          <Box display={'flex'} padding={0.2} paddingLeft={1} marginTop={2} sx={{backgroundColor:'white', borderRadius:3}} alignItems='center'>
            <Search color="inherit"/>
            <StyledInputBase placeholder="Search content types"></StyledInputBase>
          </Box>
          <LeftMenu/>
        </Box>
      {/* </Collapse> */}
      <Box sx={EntriesPageStyles.entriesMainPanelStyle}  >
        {/* Top part  */}
        <Box  sx= {EntriesPageStyles.entriesMainPanelHeader }display="flex" justifyContent={'space-between '} paddingTop={4} paddingBottom={4} paddingLeft={2} paddingRight={2}  borderBottom={1} borderColor='primary.main' >
          <Box>
            <IconButton onClick={handleDrawer}>
              <MenuIcon/>
            </IconButton>
            <span>Contents</span>
          </Box>
          <Box>
           <Box>
            <Button sx={{textTransform:"capitalize"}} variant='contained' ><Add/>New Entry</Button>
           </Box>
          </Box>
        </Box>
        {/* end of top part */}
       <FilteredTable/>
      
      </Box>
    </Box>
  );
};
export default Page;
