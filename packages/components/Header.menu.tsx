import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import React from "react";

import styles from "components/Header.menu.module.css";

const menus = [
  {
    value: "Home",
    items: null,
  },
  {
    value: "Products",
    items: (
      <Menu
        items={[
          {
            key: "1",
            label: (
              <a
                rel="noopener noreferrer"
                href="https://www.brasilparalelo.com.br"
              >
                Subitem
              </a>
            ),
          },
        ]}
      />
    ),
  },
  {
    value: "Resources",
    items: (
      <Menu
        items={[
          {
            key: "1",
            label: (
              <a
                rel="noopener noreferrer"
                href="https://www.brasilparalelo.com.br"
              >
                Subitem
              </a>
            ),
          },
        ]}
      />
    ),
  },
  {
    value: "Pricing",
    items: (
      <Menu
        items={[
          {
            key: "1",
            label: (
              <a
                rel="noopener noreferrer"
                href="https://www.brasilparalelo.com.br"
              >
                Subitem
              </a>
            ),
          },
        ]}
      />
    ),
  },
];

export default function HeaderMenuComponent(props: { isHome: boolean }) {
  return (
    <ul className={styles.ul}>
      {menus.map((item) => {
        const { value, items } = item;
        if (items) {
          return (
            <li className={styles.li} key={value}>
              <Dropdown overlay={items}>
                <a onClick={(e) => e.preventDefault()} className={styles.link}>
                  <Space>
                    {value}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
          );
        } else {
          if (!props.isHome) {
            return (
              <li className={styles.li} key={value}>
                <a className={styles.link} href="//localhost:3000">
                  {value}
                </a>
              </li>
            );
          }
          return (
            <li className={styles.li} key={value}>
              {value}
            </li>
          );
        }
      })}
    </ul>
  );
}
