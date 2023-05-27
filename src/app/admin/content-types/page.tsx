"use client";
import { Add, Close, ExpandMore, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Typography,
  styled,
  InputBase,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  Paper,
  TextField,
  Grid,
  FormControl,
  Radio,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextareaAutosize} from "@mui/material";
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

const StyledTextField = styled(TextField)(({theme})=>({
 
  "& .MuiInputBase-input" : {
    color:theme.palette.text.secondary,
  }
}))


const StyledTextArea = styled(TextareaAutosize)(({theme})=>({
  color: theme.palette.text.secondary,
  borderRadius: "12px 12px 0 12px",
  width:'540px',
  border: '1px solid grey',
  padding: theme.spacing(1),
  fontSize: theme.typography.fontSize,
  "&:focus":{
  
    boxShadow: `'0 0 0 3px ',${theme.palette.secondary.main}`
  }
}))

const Page = () => {
const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const containerRef = useRef(null);
const handleDrawer = (event:React.MouseEvent<HTMLButtonElement>) =>{
  event.preventDefault();
  setIsDrawerOpen(prevVal => !prevVal);
  console.log(containerRef);
}

const handleModal = (event:React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setIsModalOpen(prev=>!prev);
}

  return (
    <Box display="flex" flexDirection={"row"} ref={containerRef}>
         <Box sx={EntriesPageStyles.entriesDrawerStyle} display={isDrawerOpen?'block': 'none'}  >
          <Typography variant="h5">Content types </Typography>
          <div>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography>Content types</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aperiam beatae corporis iste explicabo facilis nesciunt iure quasi iusto quibusdam, earum asperiores commodi necessitatibus eum repudiandae, in molestias sit soluta.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary  expandIcon={<ExpandMore/>}>
                <Typography>Global fields types</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aperiam beatae corporis iste explicabo facilis nesciunt iure quasi iusto quibusdam, earum asperiores commodi necessitatibus eum repudiandae, in molestias sit soluta.</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        
        </Box>
      {/* </Collapse> */}
      <Box sx={EntriesPageStyles.entriesMainPanelStyle}  >
        {/* Top part  */}
        <Box  sx= {EntriesPageStyles.entriesMainPanelHeader }display="flex" justifyContent={'space-between '} paddingTop={4} paddingBottom={4} paddingLeft={2} paddingRight={2}  borderBottom={1} borderColor='primary.main' >
          <Box>
            <IconButton onClick={handleDrawer}>
              <MenuIcon/>
            </IconButton>
            <span>Content types</span>
          </Box>
          <Box>
           <Box>
            <Button sx={{textTransform:"capitalize"}} variant='contained' onClick={handleModal}><Add/>New Content Type</Button>
           </Box>
          </Box>
        </Box>
        {/* end of top part */}
       <FilteredTable/>
      
      </Box>
      <Modal open={isModalOpen} onClose={handleModal} >
          <Box sx={{backgroundColor: (theme)=>theme.palette.background.paper}} maxWidth={'fit-content'}position={'absolute'} top={'40%'} left={'40%'} borderRadius={(theme)=> theme.shape.borderRadius} >
            <Box display='flex' padding={2} justifyContent={'space-between'}  borderBottom={1} borderColor={'primary.main'} alignItems={'center'}>
              <div>
                <Typography fontWeight={500}>Create New Content Type</Typography>
              </div>
              <IconButton onClick={handleModal}>
                <Close/>
              </IconButton>
            </Box>
            <Box display={'flex'} gap={2} flexDirection={'column'} padding={2}>
                <Box display={'flex'} gap={2} >
                  <StyledTextField label="Name" required placeholder="Enter content type name" variant="filled"/>
                  <StyledTextField label="UID" required placeholder="Enter UID" helperText="Unique Identifier cannot be changed once saved" variant="filled"/>
                </Box>
                <div >                  
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <StyledTextArea maxRows={4} minRows={4} />
                  </FormControl>
                </div>
                <Box>
                  <FormControl required>
                    <FormLabel>Type</FormLabel>
                    <RadioGroup sx={{display:'flex', flexDirection:'row'}}>
                      <FormControlLabel value={'single'} control={<Radio/>} label='Single'/>
                      <FormControlLabel value={'multiple'} control={<Radio/>} label='Multiple'/>
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box display={'flex'} gap={2} justifyContent={'flex-end'}>
    	            <Button variant="text" onClick={handleModal}>Cancel</Button>
                  <Button variant="contained">Continue</Button>
                </Box>
            </Box>
          </Box>
      </Modal>
    </Box>
  );
};
export default Page;
