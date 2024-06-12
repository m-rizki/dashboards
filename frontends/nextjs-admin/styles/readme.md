# Styling

By using this approach, we can reduce repetitive style code directly in the inline component. Instead of writing the same style properties repeatedly in various components, we can define them once in a separate file and import them into the components that need them. This aids in code maintenance because if you need to change these styles, you only need to do it in one place.

Using SxProps from Material UI allows us to define the type of style properties being used, making the code more understandable and manageable.

## Usage & term

for styling variable name use SxProps from material ui

wrapper - element that surrounds all content on a web page
container: A container is typically used to group specific content within a web page

styles/site/app-bar-style.js

```js
/**
 * Add this (jsdoc code) before variable name for code suggestion
 * @type {import('@mui/material').SxProps}
 */
export const appbarsx_desktop_left_container = {
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  ml: "-18px",
  px: 0,
};
```

## Learn More

[The sx prop](https://mui.com/system/getting-started/the-sx-prop/)
