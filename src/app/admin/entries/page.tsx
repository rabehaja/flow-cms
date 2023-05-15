"use client";
import { AccountCircle, Add, Circle, Refresh, SettingsOutlined } from "@mui/icons-material";
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
} from "@mui/material";
import { MouseEventHandler, useState } from "react";

const Page = () => {
  return (
    <Box display="flex" flexDirection={"row"}>
      <Box  minHeight="100vh" padding={1} borderRight={1} borderColor="primary.main">
        {" "}
        <Typography>left column</Typography>
      </Box>
      <Box flexGrow={1} minHeight="100vh"  >
        {/* Top part  */}
        <Box  display="flex" justifyContent={'space-between '} paddingTop={4} paddingBottom={4} paddingLeft={2} paddingRight={2}  borderBottom={1} borderColor='primary.main'>
          <Box>
            <Typography>Contents</Typography>
          </Box>
          <Box>
           <Box>
            <Button sx={{textTransform:"capitalize"}} variant='contained'><Add/>New Content</Button>
           </Box>
          </Box>
        </Box>
        {/* end of top part */}
        {/* start of summary of table*/}
          <Box display={'flex'} justifyContent='space-between' borderBottom={1} borderColor="primary.main" padding={0.5} textAlign={'center'}>
            <Box>
              <Box display={'flex'} >
                <Typography fontWeight="bold" variant="body2">58 entries</Typography>
                <Refresh fontSize="small"/>
              </Box>
            </Box>
            <Box>
              <SettingsOutlined/>
            </Box>
          </Box>
        {/* end of summary of table*/}
       
          <TableContainer sx={{color:"text.secondary"}}>
            <Table>
              <TableHead>
              <TableRow>
                  <TableCell color="text.secondary">Title</TableCell>
                  <TableCell color="text.secondary">Language</TableCell>
                  <TableCell color="text.secondary">Content Type</TableCell>
                  <TableCell color="text.secondary">Version</TableCell>
                  <TableCell color="text.secondary">Environments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis officia nesciunt provident modi ut possimus sunt magni ratione minus dolore. Neque omnis expedita illum ducimus provident repudiandae aut distinctio?</TableCell>
                  <TableCell color="text.secondary">English</TableCell>
                  <TableCell color="text.secondary">Banana</TableCell>
                  <TableCell color="text.secondary">1</TableCell>
                  <TableCell color="text.secondary"><Chip icon={<Circle/>} label="Acc"/></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      
      </Box>
    </Box>
  );
};

export default Page;
