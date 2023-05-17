import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  "> *": {
    padding: 2,
  },
};
export const PaperStyle: SxProps<Theme> = {
  padding: 2,
};

export const FormControlStyle: SxProps<Theme> = {
    "> *" : { marginTop:2},
    width: "100%" ,
}
