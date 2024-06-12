/**
 * @type {import('@mui/material').SxProps}
 */
export const appbarsx_container = {
  boxShadow: 0,
  bgcolor: "transparent",
  backgroundImage: "none",
  mt: 2,
};

export const appbarsx_toolbar = {
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
};

export const appbarsx_desktop_left_container = {
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  ml: "-18px",
  px: 0,
};

export const appbarsx_desktop_menu_item = { py: "6px", px: "12px" };

export const appbarsx_desktop_right_container = {
  display: { xs: "none", md: "flex" },
  gap: 0.5,
  alignItems: "center",
};

export const appbarsx_mobile_container = {
  display: { sm: "", md: "none" },
};

export const appbarsx_mobile_drawer_container = {
  minWidth: "60dvw",
  p: 2,
  backgroundColor: "background.paper",
  flexGrow: 1,
};
