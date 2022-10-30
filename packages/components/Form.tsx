import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { PlansItems } from "./Plans.items";

import styles from "components/Form.module.css";

export default function FormComponent() {
  const [size] = useState<SizeType>("large");
  const {
    text,
    valueInCents,
    recurrence,
    packageContents,
    buttonText,
    contents,
    features,
  } = PlansItems.find((item) => item.text === "Plano Acesso Total");

  return (
    <form className={styles.form}>
      <div className={styles.detailsWrapper}>
        <h1 className={styles.headingOne}>{text}:</h1>
        <p>{packageContents}</p>
        <p>
          {Array.isArray(contents) ? (
            contents.map((content) => {
              return (
                <span className={styles.shelfContentsItem} key={content}>
                  {content}
                </span>
              );
            })
          ) : (
            <span className={styles.shelfContentsItem}>{contents}</span>
          )}
        </p>
        <ul>
          {features.map((feature) => {
            return (
              <li key={feature}>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.shelfWrapper}>
          <span className={styles.shelfValue}>
            R$ {Number(valueInCents / 100)}
          </span>
          <span className={styles.shelfRecurrence}>
            {recurrence === "MONTHLY" ? "por mês" : "outra peridicidade"}
          </span>
        </div>
      </div>
      <div className={styles.detailsForm}>
        <h2 class={styles.headingTwo}>Assine agora e garanta seu desconto:</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Telefone Celular"
            name="mobile"
            rules={[
              { required: true, message: "Please input your mobile phone!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {buttonText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </form>
  );
}
