import React, { useEffect } from 'react';
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import FoundersSection from "./FoundersSection";

function About() {
  useEffect(() => {
    // Adicionar classe `light-mode` ou `dark-mode` ao body para testes
    document.body.classList.add('light-mode');
    // Para testar o modo escuro, use: document.body.classList.add('dark-mode');
  }, []);

  return (
    <Layout title="Sobre" description="Saiba mais sobre nossa missão e valores">
      <div className="container">
        <header className={styles.heroBanner}>
          <div className="container">
            <h1 className="hero__title">Sobre Nós</h1>
            <p className="hero__subtitle">
            Descubra como nossa missão e valores nos impulsionam a criar impacto positivo e transformar a forma como vivenciamos a tecnologia.
            </p>
          </div>
        </header>

        <main>
          <section className={styles.mission}>
            <div className="container">
              <h2 className="text--center">Nossa Missão</h2>
              <div className="row">
                <div className="col col--12">
                  <p>
                    Educar para Impactar Positivamente (EIP) as pessoas sobre tecnologia. 
                    Sabemos que, apesar de existirem diversas organizações, pessoas, comunidades e plataformas 
                    que criam e divulgam conteúdos de tecnologia em português (pt-br), muitas vezes sentimos falta 
                    e acabamos recorrendo a conteúdos em inglês, principalmente quando se trata de integrações modernas. 
                    Algumas empresas focam nesse tipo de conteúdo, mas geralmente com viés comercial. Nossa abordagem 
                    é facilitar o acesso à informação com conteúdos educacionais, didáticos e modernos que abrangem 
                    desde entusiastas e estudantes até profissionais de qualquer área. Criamos conteúdos aplicando conceitos 
                    de andragogia e sem viés comercial, promovendo sempre o uso de ferramentas open source.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.values}>
            <div className="container">
              <h2 className="text--center">Nossos Valores</h2>
              <div className="row">
                <div className="col col--12">
                  <h3>Senso de Comunidade</h3>
                  <p>
                    Criamos um ambiente colaborativo e solidário onde a ajuda é mútua. Compartilhamos conhecimento, 
                    nos ajudamos na organização, parcerias e networking. Essa é inclusive uma ótima oportunidade 
                    para se conectar a outros profissionais ou potenciais parceiros de negócios.
                  </p>
                </div>
                <div className="col col--12">
                  <h3>Aprendizado Contínuo</h3>
                  <p>
                    Estamos sempre nos capacitando, seja através da leitura de livros, artigos, assim como realizando 
                    participações em eventos, meetups e demais meios para nos mantermos atualizados.
                  </p>
                </div>
                <div className="col col--12">
                  <h3>Inovação</h3>
                  <p>
                    Buscamos sempre trazer assuntos e discussões atuais sobre integrações (mas não somente). Seja 
                    relacionado a uma nova tecnologia ou a recomendações e boas práticas.
                  </p>
                </div>
                <div className="col col--12">
                  <h3>Impacto Positivo</h3>
                  <p>
                    Nosso conteúdo é aberto e gratuito. Priorizamos a qualidade e aplicabilidade do conteúdo visando 
                    sempre o impacto positivo das pessoas. Não temos viés comercial e prezamos sempre pela experiência 
                    de quem consome nossos conteúdos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FoundersSection />
        </main>
      </div>
    </Layout>
  );
}

export default About;