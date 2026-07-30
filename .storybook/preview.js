import React from "react";
import { ThemeProvider } from "styled-components";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import ResetCSS from "../src/ResetCSS";
import { ModalProvider } from "../src/widgets/Modal";

const globalDecorator = (StoryFn) => (
  <ModalProvider>
    <ResetCSS />
    <StoryFn />
  </ModalProvider>
);

// Light/dark theme switching was previously provided by the
// `themeprovider-storybook` addon, which is incompatible with Storybook 10
// (it depends on the removed `@storybook/addons` package). Replace the runtime
// panel with a static `ThemeProvider` so stories still render against the
// styled-components theme. Per-story theme overrides can be applied by
// exporting a `theme` parameter.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withTheme = (StoryFn, context) => {
  const themeName = context.globals.theme || "light";
  const theme = themeName === "dark" ? dark : light;
  return (
    <ThemeProvider theme={theme}>
      <StoryFn />
    </ThemeProvider>
  );
};

export const decorators = [globalDecorator, withTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      dynamicTitle: true,
    },
  },
};
