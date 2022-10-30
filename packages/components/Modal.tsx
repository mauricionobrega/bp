import React from "react";
import { Logo } from "ui/Logo";
import Countdown from "components/Countdown";
import styles from "components/Modal.module.css";

export default function ModalComponent(props: { open: boolean; setOpen: any }) {
  const { open } = props;

  return (
    <div className={open ? styles.modalShow : styles.modalHide}>
      <div className={styles.modalContainer}>
        <Logo width={195} height={44} />
        <a
          className={styles.modalClose}
          aria-hidden="true"
          onClick={() => props.setOpen(!props.open)}
        >
          &#x2715;
        </a>
        <p className={styles.headline}>
          R$ 200 de desconto no plano Acesso Total
        </p>
        <Countdown open={open} />
        <p className={styles.paragraph}>
          Histórias emocionantes que transformaram pontos finais em pontos de
          partida.
        </p>
        <div className={styles.users}>
          <span className={styles.usersText}>Junte-se aos</span>
          <span className={styles.usersNumber}> 292.119 </span>
          <span className={styles.usersText}>Membros</span>
        </div>
        <div className={styles.signup}>Assinar a Brasil Paralelo</div>
      </div>
    </div>
  );
}
