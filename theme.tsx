import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const configs: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const globalOverrides = {
  styles: {
    global: {
      "html, body": { padding: 0, margin: 0 },
    },
  },
};

const theme = extendTheme({ ...configs, ...globalOverrides });

export default theme;
