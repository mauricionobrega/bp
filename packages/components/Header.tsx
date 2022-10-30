import React from 'react';
import { Layout, Button } from 'antd';
const { Header } = Layout;
import HeaderMenu from 'components/Header.menu'
import { Logo } from 'ui/Logo';

import styles from 'components/Header.module.css';

export default function HeaderComponent(props: { page: string }) {
  const { page } = props
  const isHome = page === 'home'
  return (
      <Header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.globalNavigation}>
            <Logo />
            <HeaderMenu isHome={isHome} />
          </div>
          <div>
            <Button className="button-grey">Acessar a Plataforma</Button>
            <Button className="button" type="primary">Assinar</Button>
          </div>
        </div>
      </Header>
  );
}
