import React, { useState } from "react";

import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  appbarsx_desktop_left_container,
  appbarsx_container,
  appbarsx_toolbar,
  appbarsx_desktop_menu_item,
  appbarsx_desktop_right_container,
  appbarsx_mobile_container,
  appbarsx_mobile_drawer_container,
} from "@/styles/components/site/app-bar-style";

export default function CAppBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="fixed" sx={appbarsx_container}>
      <Container maxWidth="lg">
        <Toolbar variant="regular" sx={appbarsx_toolbar}>
          {/* Desktop Menu */}
          <Box sx={appbarsx_desktop_left_container}>
            <img
              src="/logo-placeholder-image.png"
              style={{
                maxWidth: "70px",
                height: "auto",
                cursor: "pointer",
              }}
              alt="logo"
              onClick={() => router.push("/")}
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem
                sx={appbarsx_desktop_menu_item}
                onClick={() => router.push("/dashboard")}
              >
                <Typography variant="body2" color="text.primary">
                  Dashboard
                </Typography>
              </MenuItem>
            </Box>
          </Box>

          <Box sx={appbarsx_desktop_right_container}>
            {session ? (
              <Button
                color="secondary"
                variant="text"
                size="small"
                component="a"
                onClick={() => signOut()}
              >
                Sign out
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                onClick={() => signIn()}
              >
                Sign in
              </Button>
            )}
          </Box>

          {/* Mobile */}
          <Box sx={appbarsx_mobile_container}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <Menu />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box sx={appbarsx_mobile_drawer_container}>
                <MenuItem onClick={() => router.push("/dashboard")}>
                  Dashboard
                </MenuItem>
                <Divider />
                {session ? (
                  <MenuItem onClick={() => signOut()}>
                    <Button
                      color="secondary"
                      variant="outlined"
                      component="a"
                      sx={{ width: "100%" }}
                    >
                      Sign out
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={() => signIn()}>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      sx={{ width: "100%" }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                )}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
