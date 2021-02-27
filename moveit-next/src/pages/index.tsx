import Head from "next/head";
import { GetServerSideProps } from "next";
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
import { ChallengesProvider } from "../context/ChallengesContext";

export default function Home({
  toggleTheme,
  level,
  currentExperience,
  challengesCompleted,
}) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
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
          <strong>
            Alterar para modo {title === "dark" ? "Light" : "Dark"}?
          </strong>

          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={30}
            offHandleColor={colors.text}
            onHandleColor={colors.textHighlight}
            offColor={colors.grayLine}
            onColor={colors.text}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          />
        </footer>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
