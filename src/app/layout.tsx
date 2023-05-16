"use client";
import "./normalize.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import DefaultTheme from "@/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const inter = Inter({ subsets: ["latin"] });
const clientSideEmotionCache = createEmotionCache();



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <html lang="en">
      
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider></CacheProvider>
  );
}
