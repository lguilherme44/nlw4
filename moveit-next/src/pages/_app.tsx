import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { ChallengesProvider } from "../context/ChallengesContext";
import usePersistedState from "../util/persistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChallengesProvider>
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
