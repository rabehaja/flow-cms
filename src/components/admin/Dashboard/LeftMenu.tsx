import {
  ChevronRight,
  DashboardCustomize,
  DashboardCustomizeOutlined,
} from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

type Props = {
  children?: React.ReactNode;
  label?:string;
};

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    boxShadow: theme.shadows[1],
    "& >.link-btn--inactive": {
      display: "block",
    },
  },
  "& > .link-btn--inactive": {
    display: "none",
  },
}));

const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  "&:hover": {
    borderColor: theme.palette.background,
    border: 2,
  },
}));

const LeftMenuButton = (props:Props)=>{
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(event.currentTarget);
    setIsClicked((prev) => !prev);
  };

  return ( <CustomListItemButton onClick={handleClick} key={props.label}>
    <ListItemText
      primary={props.label}
      sx={{ textTransform: "capitalize" }}
    />
    {!isClicked && (
      <CustomListItemIcon className="link-btn--inactive">
        <DashboardCustomizeOutlined />
      </CustomListItemIcon>
    )}
    {isClicked && (
      <CustomListItemIcon className="link-btn--active">
        <ChevronRight />
      </CustomListItemIcon>
    )}
  </CustomListItemButton>)
};


const LeftMenu = (props: Props) => {
  const listSample: string[] = ["menu 1", "menu 2", "menu 3"];

 
  return (
    <List sx={{ marginTop: 2 }}>
      {listSample.map((listItem) => {
        return (
         <LeftMenuButton label={listItem} />
        );
      })}
    </List>
  );
};

export default LeftMenu;
