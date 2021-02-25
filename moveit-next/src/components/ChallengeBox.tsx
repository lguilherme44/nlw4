import { useContext } from "react";
import styles from "../styles/components/ChallengeBox.module.css";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completChallenge();
    resetCountdown();
  }

  function handleChanllengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChanllengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio.</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
          </p>
        </div>
      )}
    </div>
  );
}
