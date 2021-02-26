import Head from "next/head";
import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../context/CountdownContext";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";

export default function Home({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
      <footer className={styles.footer}>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={36}
          handleDiameter={20}
          offHandleColor={colors.text}
          onHandleColor={colors.textHighlight}
          offColor={colors.grayLine}
          onColor={colors.text}
        />
      </footer>
    </div>
  );
}
