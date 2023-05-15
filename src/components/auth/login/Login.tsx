"use client";
import {
  Container,
  Box,
  Paper,
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Divider,
} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login'
import Image from "next/image";
import styles from './login.module.scss';
import { ContainerStyle,FormControlStyle,PaperStyle } from './login.style';

const LoginPanel = () => {
  return (
    <div>
      <Container sx={ContainerStyle} >
     
        <Box display={"flex"} flexDirection="row" gap={1} className={styles['test__sub-container']} >
      
        <Paper
        
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("this is working");
        }}
       
        sx={PaperStyle}
      >
        <Box display={"flex"} flexDirection="column" alignItems={"center"} gap={2}>
        <Image  src={"https://placehold.co/100x100"} alt={""} width={100} height={100} ></Image>
        <Typography variant="h4" >Welcome to FlowCMS!</Typography>
        </Box>
       
        <Divider sx={{marginTop:2, marginBottom:2}}/>
        
        <Box display={"flex"} flexDirection="row" rowGap={2}>
          <TextField label="E-mail" required  autoComplete="false"></TextField>
          <TextField label="Password" required type="password" autoComplete="false"></TextField>
          <FormControlLabel
            control={<Checkbox />}
            label={"Remember me"}
          />
          <Button type="submit" variant="contained">
            Login <LoginIcon sx={{marginLeft:2,}}/>
          </Button>
        </Box>
      </Paper>
        </Box>
        
      </Container>
    </div>
  );
};

export default LoginPanel;
