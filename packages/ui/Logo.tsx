import * as React from "react";
import Image from 'next/image';
import LogoImage from 'ui/images/Logo.svg'

import styles from './Logo.module.css';

export const Logo = (props: any) => {
  return <Image
    src={LogoImage}
    alt="Logo Brasil Paralelo"
    width={props.width}
    height={props.height}
    className={styles.img}
  />;
};

Logo.defaultProps = {
  with: 142,
  height: 32,
}
