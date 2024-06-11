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
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function CAppBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
            }}
          >
            <img
              src="/logo-placeholder-image.png"
              style={{
                maxWidth: "70px",
                height: "auto",
                cursor: "pointer",
              }}
              alt="logo of sitemark"
            />
            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* as link */}
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Typography variant="body2" color="text.primary">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem
                sx={{ py: "6px", px: "12px" }}
                onClick={() => router.push("/dashboard")}
              >
                <Typography variant="body2" color="text.primary">
                  Dashboard
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Typography variant="body2" color="text.primary">
                  FAQ
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Button
              color="primary"
              variant="text"
              size="small"
              component="a"
              onClick={() => signIn()}
            >
              Sign in
            </Button>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
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
              <Box
                sx={{
                  minWidth: "60dvw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
              >
                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <Divider />
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
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
