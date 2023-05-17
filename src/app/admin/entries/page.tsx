"use client";
import { AccountCircle, Add, Circle, Refresh, Search, SettingsOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Theme,
  colors,
  useTheme,
  Tabs,
  Tab,
  TextField,
  Drawer,
  Slide,
  styled,
  InputBase,
  Divider,
  Collapse
} from "@mui/material";
import { MouseEventHandler, useRef, useState } from "react";
import EntriesPageStyles from "./page.styles";
import MenuIcon from '@mui/icons-material/Menu';


const StyledInputBase = styled(InputBase)(({ theme }) => ({
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
      <Collapse in={isDrawerOpen}  timeout={500} orientation='horizontal' >
        <Box sx={EntriesPageStyles.entriesDrawerStyle} display={isDrawerOpen?'block': 'none'}  >
          <Tabs variant="fullWidth" sx={{borderRadius:2, boxShadow:2, backgroundColor:'white'}}>
            <Tab  label="Content Types" sx={{borderRight:1, borderColor:'grey', padding:0.2, textTransform:'capitalize'}}></Tab>   
            <Tab  label="Labels" sx={{padding:0.2, textTransform:'capitalize'}}></Tab>        
          </Tabs>
          <Box display={'flex'} padding={0.2} paddingLeft={1} marginTop={2} sx={{backgroundColor:'white', borderRadius:3}} alignItems='center'>
            <Search color="inherit"/>
            <StyledInputBase placeholder="Search content types"></StyledInputBase>
          </Box>
        </Box>
      </Collapse>
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
            <Button sx={{textTransform:"capitalize"}} variant='contained' ><Add/>New Content</Button>
           </Box>
          </Box>
        </Box>
        {/* end of top part */}
        {/* start of summary of table*/}
          <Box display={'flex'} justifyContent='space-between' borderBottom={1} borderColor="primary.main" padding={0.5} textAlign={'center'}>
            <Box>
              <Box display={'flex'} >
                <span>58 content</span>
                <Refresh fontSize="small"/>
              </Box>
            </Box>
            <Box>
              <SettingsOutlined/>
            </Box>
          </Box>
        {/* end of summary of table*/}
       
          <TableContainer >
            <Table>
              <TableHead>
              <TableRow>
                  <TableCell sx={EntriesPageStyles.tableRowStyle} >Title</TableCell>
                  <TableCell sx={EntriesPageStyles.tableRowStyle} >Language</TableCell>
                  <TableCell sx={EntriesPageStyles.tableRowStyle}>Content Type</TableCell>
                  <TableCell sx={EntriesPageStyles.tableRowStyle}>Version</TableCell>
                  <TableCell sx={EntriesPageStyles.tableRowStyle}>Environments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{color:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis officia nesciunt provident modi ut possimus sunt magni ratione minus dolore. Neque omnis expedita illum ducimus provident repudiandae aut distinctio?</TableCell>
                  <TableCell >English</TableCell>
                  <TableCell >Banana</TableCell>
                  <TableCell >1</TableCell>
                  <TableCell ><Chip icon={<Circle/>} label="Acc"/></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      
      </Box>
    </Box>
  );
};
export default Page;
