"use client";
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropDownCircle,
  Mail,
  NotificationsOutlined,
  Save,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Toolbar,
  styled,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../../images/flow-cms.png'

const CustomInput = styled(Input)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: "white"  ,
  padding:theme.spacing(1),
  display:'none',
  borderRadius:theme.shape.borderRadius,
  [theme.breakpoints.between('sm','md')]:{
    display:'block',
    width:'100%'
  }, 
  [theme.breakpoints.up('md')]:{
    display:'block',
    width:'500px'
  }
  
}));
const CustomToolBar = styled(Toolbar)(({theme})=>({
  paddingLeft:0,
  paddingRight:theme.spacing(2),
  display:'flex',
  justifyContent:'space-between',
  "&.MuiToolbar-root":{
    paddingLeft:0,
  }
}
));

const CustomSearchBox = styled('div')(({theme})=>({
  borderRadius:theme.shape.borderRadius,
  backgroundColor:'white',
  display:'flex',
  gap:theme.spacing(1,0,0,1),
  color:theme.palette.text.secondary,
  alignItems:'center',
  paddingLeft:theme.spacing(1)
}));



const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(
    null
  );

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.currentTarget !== null) {
      setAnchorElement((prevAnchorElement) => event.currentTarget);
    }
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log(anchorElement);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    setAnchorElement(null);
  };

  return (
    <Box>
      <AppBar position="sticky" sx={{ border: "0", boxShadow: 0 }}>
        <CustomToolBar>
          <IconButton>
            <Link href={"/admin"}>
              <Image
                src={logo.src}
                width={50}
                height={50}
                alt={""}
              />
            </Link>
          </IconButton>

          <CustomSearchBox >
            <Search/>
            <CustomInput placeholder="Search..." fullWidth/>
            <IconButton>
              <Save fontSize="small"/>
            </IconButton>
            <IconButton>
              <ArrowDropDown fontSize="small"/>
            </IconButton>
          </CustomSearchBox>

          <Box sx={{ "> *": { color: "text.primary" } }}>
            <IconButton>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge>
                <NotificationsOutlined />
              </Badge>
            </IconButton>

            <IconButton
              onClick={handleToggle}
              aria-controls={isOpen ? "hamburger-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isOpen ? "true" : undefined}
              id="account-button"
            >
              <Badge>
                <AccountCircle />
              </Badge>
            </IconButton>
          </Box>
        </CustomToolBar>
      </AppBar>
      <Menu
        id="hamburger-menu"
        open={isOpen}
        onClose={handleCloseMenu}
        anchorEl={anchorElement}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
      >
        <MenuItem sx={{ color: "primary.main" }}>Profile</MenuItem>
        <MenuItem sx={{ color: "primary.main" }}>My Account</MenuItem>
        <MenuItem sx={{ color: "primary.main" }}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
