import { AppProps } from "next/app";
import { Box, ThemeProvider } from "theme-ui";
import Footer from "../components/Footer";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: 'url("/wall.svg")',
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: ["100%", "600px"],
            m: "auto",
            p: [3, 3],
          }}
        >
          <Component {...pageProps} />
        </Box>
        <footer>
          <Footer />
        </footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
