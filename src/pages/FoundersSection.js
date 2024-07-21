import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './about.module.css';

const founders = [
  {
    name: 'Dan',
    title: 'Arquiteto de Integrações',
    imgSrc: 'https://github.com/it0dan.png',
    githubUrl: 'https://github.com/it0dan',
    bio: [
      '📚 Formado em Engenharia de Software. Tenho experiência em design e arquiteturas de APIs, boas práticas relacionadas a governança, segurança e gerenciamento de todo ciclo de vida das APIs. Trabalho com as melhores práticas de arquiteturas modernas, distribuídas como eventos, microsserviços, cloud e composable architecture.',      
      '⭐ Atualmente auxilio clientes a habilitar e potencializar suas estratégias de integração na transformação digital, arquitetura ágil, ecossistemas de plataformas e integração com parceiros. Acredito no aprendizado contínuo, então estou sempre estudando algo.',
      '💡 Sou palestrante, criador de conteúdo e coordenador de eventos, e adoro compartilhar meu conhecimento e experiências, principalmente sobre integrações. Mas isso é uma variável, não uma constante. Então, estou sempre fazendo requisições POST, PATCH ou PUT no meu cérebro. 🧠'
    ]
  },
  {
    name: 'Rafael Mateus',
    title: 'Engenheiro de Software',
    imgSrc: 'https://github.com/rafaelbmateus.png',
    githubUrl: 'https://github.com/rafaelbmateus',
    bio: [
      '📚 Possuo um diploma de bacharel em Sistemas de Informação pela UNISUL e concluí duas especializações: uma em IoT e outra em Gerenciamento de Projetos.',
      '🤓 Sou um engenheiro de software imerso no mundo da arquitetura de microserviços, atualmente me aprofundando em Golang e na cultura DevOps. Tenho mais de 12 anos de experiência em desenvolvimento de software, onde trabalhei com outras linguagens de programação como Ruby, Python, C#, Vue e JavaScript.',
      '💡 Gosto de organizar meetups como API Floripa, Cloud Native Floripa e whiteStone_dev, que têm como objetivo disseminar conhecimento e incentivar novos desenvolvedores. Sempre busco desenvolver habilidades humanas como trabalho em equipe, flexibilidade, cultura de dar e receber feedback, e motivar a equipe para alcançar resultados.'
    ]
  },
  {
    name: 'Lucas Ferrari',
    title: 'Arquiteto de Soluções',
    imgSrc: 'https://github.com/ferrari-lucas.png',
    githubUrl: 'https://github.com/ferrari-lucas',
    bio: [
      '💡 Ajudando empresas a modernizar as capacidades de arquitetura de integração para maximizar soluções de negócios e ter sucesso em ecossistemas digitais.',
      '⭐ Habilidades de comunicação para estabelecer parcerias com clientes e influenciar tomadores de decisão em ciclos de vendas técnicas. Visão analítica e estratégica de soluções arquitetônicas e cenários de negócios. Liderança de equipes multidisciplinares. Palestrante experiente em eventos nacionais e internacionais.', 
      '📚 Tecnologias: API, REST, OAS, DDD, Gestão de API e API Gateway, Computação em Nuvem, Event-Driven, Microservices, Arquitetura de Soluções.'
    ]
  }
];

const FounderCard = ({ name, title, imgSrc, githubUrl, bio }) => (
  <div className={styles.founderCard}>
    <div className={styles.founderImageContainer}>
      <img src={imgSrc} alt={name} className={styles.founderImage} />
    </div>
    <div className={styles.founderContent}>
      <h3>{name}</h3>
      <p><strong>{title}</strong></p>
      <div className={styles.bioContent}>
        {bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
        Perfil GitHub
      </a>
    </div>
  </div>
);

const FoundersSection = () => (
  <section className={styles.founders}>
    <div className="container">
      <h2 className="text--center">Quem Somos</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        transitionTime={1000}
      >
        {founders.map((founder, index) => (
          <div key={index}>
            <FounderCard {...founder} />
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default FoundersSection;