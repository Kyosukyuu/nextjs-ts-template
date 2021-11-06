import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { DefaultSeo } from "next-seo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        defaultTitle="Create Next App"
        additionalLinkTags={[
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default App;
