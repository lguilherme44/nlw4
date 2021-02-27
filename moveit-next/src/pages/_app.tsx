import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { ChallengesProvider } from "../context/ChallengesContext";
import { ToastContainer } from "react-toastify";
import usePersistedState from "../util/persistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import GlobalStyle from "../styles/global";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
