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
        color="inherit"
        padding={1.5}
        top={70}
        sx={{backgroundColor:"primary.main", "> *": {color:"text.primary"}}}
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
        <Link href={'/admin/assets'} color={'text.primary'}>
          <PermMediaOutlined fontSize="medium"/>
          </Link>
        </IconButton>
        <IconButton>
        <Link href={'/admin/content-types'}  color={'text.primary'}>
          <FlipToFrontOutlined fontSize="medium"/>
          </Link>
        </IconButton>
        <Divider sx={{marginTop:2, marginBottom:2}}  color={'text.primary'}/>
        <IconButton>
        <Link href={'/admin/settings'}  color={'text.primary'}>
          <SettingsOutlined fontSize="medium"/>
          </Link>
        </IconButton>
        <IconButton>
        <Link href={'/admin/users'}  color={'text.primary'}>
          <PeopleAltOutlined fontSize="medium"/>
          </Link> 
        </IconButton>
      </Box>
    </>
  );
};

export default Sidebar;
