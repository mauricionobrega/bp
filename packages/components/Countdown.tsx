import React, { useState, useEffect } from "react";
import { HydrationContext } from "react-hydration-provider";

import styles from "components/Countdown.module.css";

function HydrationProvider({ children }: any) {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <HydrationContext.Provider value={hydrated}>
      {children}
    </HydrationContext.Provider>
  );
}

function CountdownComponent(props: any) {
  const getCountdown = () => {
    const year = new Date().getFullYear() + 1;
    const timeRemaining =
      new Date(`${year}-1-1`).getTime() - new Date().getTime();
    let countdown = {
      dias: 0,
      horas: 0,
      min: 0,
      seg: 0,
    };
    if (timeRemaining > 0) {
      countdown = {
        dias: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        horas: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        min: Math.floor((timeRemaining / 1000 / 60) % 60),
        seg: Math.floor((timeRemaining / 1000) % 60),
      };
    }
    return countdown;
  };
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown());
    }, 1000);
  });

  return (
    <div className={styles.countdown}>
      {countdown
        ? Object.entries(countdown).map(([unit, value]) => {
            return (
              <div key={unit} className={styles.wrapper}>
                <span className={styles.strong}>{value}</span>
                <span className={styles.unit}>{unit}</span>
                {unit !== "seg" ? <span className={styles.sep}>:</span> : ""}
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default function OnlyRerenderAfterHydration() {
  return (
    <HydrationProvider>
      <CountdownComponent />
    </HydrationProvider>
  );
}
