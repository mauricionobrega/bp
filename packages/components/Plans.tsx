import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

import styles from "components/Plans.module.css";
import FeatureBullet from "ui/images/feature-bullet.svg";
import { PlansItems } from "./Plans.items";

export default function PlansComponent() {
  return (
    <div className={styles.plans}>
      <div className={styles.wrapperTitles}>
        <h1 className={styles.plansTitle}>Nossos planos</h1>
        <h2 className={styles.plansHeadingTitle}>
          Uma Brasil Paralelo para cada momento.
        </h2>
        <p className={styles.plansParagraph}>
          Você pode assistir no computador ou em qualquer aparelho conectado à
          internet, como Smart TVs, smartphones e tablets.
        </p>
      </div>

      <Row justify="space-evenly">
        {PlansItems.map((item) => {
          const {
            text,
            href,
            badge,
            valueInCents,
            recurrence,
            packageContents,
            buttonText,
            contents,
            features,
          } = item;
          const { badgeText, badgeClassName } = badge || {};
          return (
            <Col span={7} className={styles.shelf} key={text}>
              <div className={styles.shelfWrapper}>
                <span className={styles.shelfHeading}>{text}</span>
                {badge ? (
                  <span className={styles[badgeClassName]}>{badgeText}</span>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.shelfWrapper}>
                <span className={styles.shelfValue}>
                  R$ {Number(valueInCents / 100)}
                </span>
                <span className={styles.shelfRecurrence}>
                  {recurrence === "MONTHLY" ? "por mês" : "outra peridicidade"}
                </span>
              </div>
              <span className={styles.shelfPackageContents}>
                {packageContents}
              </span>
              <div className={styles.shelfWrapper}>
                <Link href={href} passHref>
                  <a target="_blank" className={styles.shelfButtonText}>
                    {buttonText}
                  </a>
                </Link>
              </div>
              <span className={styles.shelfDivider}></span>
              <div className={styles.shelfWrapper}>
                <span className={styles.shelfContentsTitle}>Conteúdo</span>
                <div className={styles.shelfContents}>
                  {Array.isArray(contents) ? (
                    contents.map((content) => {
                      return (
                        <span
                          className={styles.shelfContentsItem}
                          key={content}
                        >
                          {content}
                        </span>
                      );
                    })
                  ) : (
                    <span className={styles.shelfContentsItem}>{contents}</span>
                  )}
                </div>
              </div>
              <div className={styles.shelfFeaturesWrapper}>
                <ul className={styles.shelfFeatures}>
                  {features.map((feature) => {
                    return (
                      <li className={styles.shelfFeaturesItem} key={feature}>
                        <Image
                          className={styles.shelfFeaturesItemImage}
                          width={24}
                          height={24}
                          src={FeatureBullet}
                        />
                        <span className={styles.shelfFeatureItemText}>
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
