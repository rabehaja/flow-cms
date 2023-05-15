"use client";
import { ContainerStyle, PaperStyle, FormControlStyle } from "./page.styles";
import {
  Container,
  Box,
  Paper,
  Typography,
  Divider,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import styles from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Page = () => {
    const router = useRouter();
    const submitFormHandler = (event:React.FormEvent<HTMLFormElement>)=>{
        
        event.preventDefault();
        router.push('/admin');
    };
  return (
    <div>
      <Container sx={ContainerStyle}>
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          gap={1}
         
        >
          <Paper
            component="form"
            onSubmit={submitFormHandler}
            sx={PaperStyle}
          >
            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={"center"}
              gap={2}
            >
              <Image
                src={"https://placehold.co/100x100"}
                alt={""}
                width={100}
                height={100}
              ></Image>
              <Typography variant="h4">Welcome to FlowCMS!</Typography>
            </Box>

            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

            <Box display={"flex"} flexDirection="column" gap={1} >
            <TextField
                label="E-mail"
                required
                autoComplete="false"
              ></TextField>
              <TextField
                label="Password"
                required
                type="password"
                autoComplete="false"
              ></TextField>
              <FormControlLabel control={<Checkbox />} label={"Remember me"} />
              <Button type="submit" variant="contained">
                Login <LoginIcon sx={{ marginLeft: 2 }} />
              </Button>
            </Box>
          </Paper>
          <Typography variant="body1"><Link href={"/auth/forgot-password"}>Forgot your password?</Link></Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Page;
