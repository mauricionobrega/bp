import React, { useState, useEffect } from 'react';
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import Image from 'next/image';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Plans from 'components/Plans';
import Modal from 'components/Modal';
import LandingVideo from 'ui/images/landing-video.png';
const { Content } = Layout;

import 'ui/theme/theme.css';
import 'ui/styles/layout.css';

export default function Landing() {
  const [ size ] = useState<SizeType>('large');
  const [ open, setOpen ] = useState(true);
  useEffect(() => {
    document.body.classList.toggle('modal-opened', open);
  }, [open])

  return (
    <HydrationProvider>
			<main>
				<Server>
					<p>
						This will be rendered during html generation (SSR, SSG, etc) and the
						initial app hydration. It should always have a reliable value that
						will render the same in both a server and client environment.
					</p>
				</Server>
				<Client>
          <Layout>
            <Header page="home" />
            <Content className="content">
              <p className="content-paragraph-heading">Resgatar bons valores, idéias e sentimentos no coração de todos os brasileiros.</p>
              <p className="content-paragraph-subheading">— Somos uma empresa de entretenimento e educação. Orientados pela busca da verdade histórica, ancorada na realidade dos fatos, e sem qualquer tipo de ideologização na produção de conteúdo.</p>
              <div>
                <Button className="button-large button-link" type="link" icon={<PlayCircleOutlined />} size={size}>Ver Produções</Button>
                <Button className="button-large button" type="primary">Assine a Brasil Paralelo</Button>
              </div>
              <figure className="figure-center">
                <Image
                  src={LandingVideo}
                  alt="Imagem Brasil Paralelo"
                />
              </figure>
              <Plans />
            </Content>
            <Footer />
            <Modal
              open={open}
              setOpen={setOpen}
            />
          </Layout>
				</Client>
			</main>
		</HydrationProvider>
  );
}
