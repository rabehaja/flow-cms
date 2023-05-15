import { DashboardOutlined, EditNoteOutlined, FlipToFrontOutlined, PeopleAltOutlined, PermMediaOutlined, SettingsOutlined } from "@mui/icons-material";
import { Box, Divider, IconButton,Tooltip,Link } from "@mui/material";


const Sidebar = () => {
  return (
    <>
      <Box
        minHeight={"calc(100vh - 70px)"}
        width={"fit-content"}
        display="flex"
        flexDirection={"column"}
        sx={{ bgcolor: "secondary.main" }}
        padding={1.5}
        top={70}
      >
        <Tooltip  title="Dashboard" placement="right-end" arrow> 
          <IconButton>
          <DashboardOutlined fontSize="medium"/>
          </IconButton>
        </Tooltip>
       
        <IconButton>
          <Link href={'/admin/entries'}> <EditNoteOutlined fontSize="medium"/></Link>
         
        </IconButton>
        <IconButton  >
        <Link href={'/admin/assets'}>
          <PermMediaOutlined fontSize="medium"/>
          </Link>
        </IconButton>
        <IconButton>
        <Link href={'/admin/content-types'}>
          <FlipToFrontOutlined fontSize="medium"/>
          </Link>
        </IconButton>
        <Divider sx={{marginTop:2, marginBottom:2}}/>
        <IconButton>
        <Link href={'/admin/settings'}>
          <SettingsOutlined fontSize="medium"/>
          </Link>
        </IconButton>
        <IconButton>
        <Link href={'/admin/users'}>
          <PeopleAltOutlined fontSize="medium"/>
          </Link> 
        </IconButton>
      </Box>
    </>
  );
};

export default Sidebar;
