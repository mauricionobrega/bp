import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
import { Logo } from 'ui/Logo';

import styles from 'components/Footer.module.css';

export default function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <Logo />
      <span className={styles.copy}>© 2022 Brasil Paralelo. All rights reserved.</span>
    </Footer>
  );
}
