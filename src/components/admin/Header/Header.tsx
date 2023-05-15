"use client";
import {
  AccountCircle,
  Mail,
  MailOutlined,
  Notifications,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Container,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    <Box >
      <AppBar
        position="sticky"
 
        sx={{ border: "0", boxShadow: 0 }}
      >
        <Toolbar>
          <IconButton>
            <Link href={"/admin"}>
              <Image
                src="https://placehold.co/40x40"
                width={40}
                height={40}
                alt={""}
              />
            </Link>
          </IconButton>

          <Box flexGrow={1}>
            <TextField
              placeholder="Search..."
              variant="filled"
              sx={{
                backgroundColor: "background.default",
                color: "secondary.main",
              }}
              inputProps={{color:"text.secondary"}}
            ></TextField>
          </Box>

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
        </Toolbar>
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
