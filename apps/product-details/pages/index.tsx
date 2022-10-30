import React, { useState } from "react";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { Layout } from "antd";
import "antd/dist/antd.css";

import Header from "components/Header";
import Footer from "components/Footer";
import Form from "components/Form";

const { Content } = Layout;

import "ui/theme/theme.css";
import "ui/styles/layout.css";

export default function ProductDetails() {
  return (
    <HydrationProvider>
      <main className="fix-main">
        <Server>
          <p>
            This will be rendered during html generation (SSR, SSG, etc) and the
            initial app hydration. It should always have a reliable value that
            will render the same in both a server and client environment.
          </p>
        </Server>
        <Client>
          <Layout>
            <Header page="product" />
            <Content className="content">
              <Form />
            </Content>
            <Footer />
          </Layout>
        </Client>
      </main>
    </HydrationProvider>
  );
}
