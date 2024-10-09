---
slug: ciclo-de-vida-das-apis
title: Ciclo de Vida das APIs
authors: [it0dan]
tags: [APIs, ciclo de vida, monitoramento, aposentadoria, versionamento, api first, testes]
---

# Ciclo de Vida das APIs

Assim como os seres vivos, as APIs têm um ciclo de vida. E em cada estágio do desenvolvimento de uma API, existem recomendações e boas práticas a serem seguidas. O intuito deste conteúdo é definir o significado e como você pode potencializar sua estratégia de negócios a partir da compreensão do ciclo de vida de uma API.

<!-- truncate -->

Antes de mais nada, temos que compreender que APIs não são simplesmente ativos tecnológicos, são ativos de negócio. A estratégia de APIs deve estar conectada com a estratégia de negócios para que as organizações consigam aumentar a experiência dos clientes aplicando conceitos de conectividade moderna, como arquitetura orientada a eventos, microsserviços, computação em nuvem, inteligência artificial, open everything, e que estejam focadas em se tornarem cada vez mais conectadas, digitais e abertas!

O ciclo de vida das APIs é o conceito em que elas existem sob várias fases, e cada uma tem sua relevância em todo o processo de desenvolvimento, operações e estratégias de negócio da organização. É importante ressaltar que não existe consenso na comunidade sobre quais são todos os estágios de vida de uma API, porque dependerá de diversos fatores como políticas internas de desenvolvimento de APIs, processos de governança e operações da organização, tipo de API, casos de uso e etc. Ou seja, vocês encontrarão conteúdos que falam sobre 3 estágios, 4 estágios, 5 estágios e por aí vai. No fim das contas, a quantidade de estágios não é o mais relevante, mas sim a explicação do ciclo como um todo.

Nesse conteúdo, dividiremos o ciclo de vida em 7 estágios, que são:

- Planejamento
- Design
- Desenvolvimento
- Testes
- Publicação
- Monitoramento
- Aposentadoria

## Planejamento

Todas as fases do ciclo de vida da API têm sua devida importância, mas é fato que se a primeira delas não for bem planejada e executada, impactará diretamente em todas as outras fases, seja no prazo de entrega, no desenvolvimento da própria API, na expectativa dos consumidores e por aí vai. Então, é preciso ter em mente que a API é concebida para ser utilizada; esse é o propósito principal dela! No planejamento, todas as partes interessadas (stakeholders) deverão participar. Pessoas de backend, frontend, operações, segurança, de negócio e também possíveis consumidores dessa API. No artigo em que escrevi sobre API First, aprofundo na importância e os benefícios de adotar essa abordagem de desenvolvimento. Sua interface primeiro, a implementação depois! Esse é um dos princípios de API First. Sendo assim, o planejamento se torna vital para todo o ciclo de vida, mapeando quais são os cenários de uso, recursos, operações, patterns de segurança, design e versionamento que serão utilizados. Tudo isso deve ser definido no planejamento.

## Design

Após o planejamento, começamos de fato a colocar a "mão na massa". Nessa fase, criamos a interface/contrato da nossa API, desenhando tudo que foi pensado e discutido no planejamento em um documento chamado swagger, utilizando a especificação OpenAPI. Então, faremos o design dos parâmetros, recursos, operações, autenticação, autorização, status codes, error handlings, modelos e etc. Sua documentação deve ser autodescritiva! Outro princípio de API First. Quanto maior a experiência do desenvolvedor, mais rápido será o ROI, a absorção pelos consumidores e também a disseminação dessa API no mercado.

## Desenvolvimento

A utilização de ferramentas para automatizar e otimizar todo o processo de criação e exposição de uma API é necessária, mas no desenvolvimento, ela se faz ainda mais importante. Ferramentas que consigam, a partir do contrato, gerar SDKs e mocks para que consumidores possam ir testando e dando feedback (e também desenvolvendo as aplicações que vão consumir essa API) e ferramentas que consigam traduzir o modelo lógico de dados para modelo lógico computacional para que assim o desenvolvedor do backend consiga otimizar seu desenvolvimento. Esse é um conceito em engenharia de software que chamamos de paralelismo, e é uma das essências e um dos maiores benefícios da abordagem API First.

## Testes

Os testes também fazem parte do desenvolvimento. Você não testa só quando vai colocar em produção e sim durante todo o ciclo de desenvolvimento, certo? Certo?? Mas antes da virada para produção, serão feitos mais e mais testes para garantir que a publicação seja bem-sucedida! E assim como na fase de desenvolvimento, o maior aliado na fase de testes é o próprio cliente, que serão os consumidores dessa API de fato. Então, trabalhar com o conceito de beta testers é importante para a estratégia como um todo, pois eles trarão feedback e com certeza (absoluta!) encontrarão erros, e ajustes serão realizados. A utilização de mocks para acelerar o processo e diminuir o atrito nos testes de integração também é essencial. Além disso, ferramentas de API Testing são de extrema importância para que sejam validados os diversos tipos de cenários que foram mapeados no planejamento, bem como testes de carga e segurança.

## Publicação

Um ponto que não foi comentado na fase do planejamento (propositalmente) e que deve ser desenhado nela é a estratégia de divulgação dessa API, o go-to-market. Como disse no início deste conteúdo, a estratégia de APIs deve estar conectada com a estratégia de negócios; temos que pensar nas nossas APIs como um produto, por isso o lançamento deve ser pensado estrategicamente também. Qual o público-alvo? Como será feita a divulgação? Por onde será feita a divulgação? Qual percentual de consumidores utilizando a API pretendemos alcançar em X tempo? Essas são algumas perguntas que devem estar respondidas desde a fase do planejamento, para que quando a API seja publicada, consigamos medir se os objetivos iniciais mapeados foram alcançados. A utilização de um portal de desenvolvedores é fundamental, pois lá é a vitrine de suas APIs e é aliado na estratégia de disseminação dessa API para todo o ecossistema de consumidores, sejam parceiros, clientes internos ou externos.

## Monitoramento

Esperamos que o monitoramento seja a fase mais duradoura, e inversamente proporcional à duração esperamos que sejam os problemas. Mas como diria minha vó, querer não é poder! É fato que problemas vão surgir e que a API precisará ser melhorada, que coisas planejadas no início talvez não aconteçam da forma esperada, que o mercado ou regulação mudou e agora é necessário se adaptar… São diversos os motivos para entender que monitorar a API é peça chave para garantir que ela esteja acessível e altamente disponível. A criação de processo de retroalimentação de melhoria contínua é necessário para garantir que a API esteja saudável através da análise de status codes, latência média, tamanho do payload e etc. Garantir que está sendo utilizada, informações como quantidade de aplicações que consomem, top 10 de aplicações, percentual de crescimento em X tempo, aplicações engajadas e desengajadas. E claro, não só monitoramento reativo, mas é necessário monitoramento proativo, onde seja possível configurar gatilhos a partir de comportamentos anormais da API que disparem alertas para que seja sanado um problema antes mesmo de acontecer, impactando o mínimo possível as aplicações e consequentemente aumentando a experiência dos clientes. A utilização de uma plataforma de gerenciamento de APIs se torna item obrigatório, pois ela conseguirá trazer todos esses dados de telemetria das APIs para que o monitoramento seja trabalhado de forma reativa e proativa, trazendo assim observabilidade do ecossistema de APIs da organização.

## Aposentadoria

As APIs também aposentam, e essa é a última fase do ciclo de vida de uma API. Geralmente uma API é aposentada porque tem muitos bugs, é insegura, ineficiente, os custos são altos, o serviço não serve mais ao propósito de negócio e não atende mais casos de uso. São diversos os motivos para que uma API seja aposentada, e assim como em qualquer fase, o foco sempre deve ser em quem vai consumi-la, para que o impacto (nesse caso, da aposentadoria) seja o mínimo possível. Aqui, comunicação é palavra-chave, os consumidores devem ser comunicados da forma mais transparente possível que a API será aposentada, por que será, quando será e como será. Além da comunicação através dos canais com o cliente, também há estratégias na própria API que podem auxiliar, como a utilização do header API Sunset, onde no retorno do response é inserido o header sunset com a data final daquela API. A ideia principal em cima do versionamento ou aposentadoria de uma API é que a mudança deve ser gradual, assim como o pôr-do-sol, para que gere o mínimo de impacto nos consumidores.

## Conclusão

Nesse artigo, definimos o que é o ciclo de vida das APIs, quais são as fases e as boas práticas que utilizamos em cada uma para garantir que a API cumpra o propósito dela, que é ser utilizada! Ouso a dizer que é impossível ter sucesso em todas as fases sem um processo de governança que garanta consistência, segurança e qualidade em escala para todo o processo de desenvolvimento e operações das APIs. Seguindo as recomendações deste artigo, provavelmente sua estratégia de negócios será potencializada pela sua estratégia de API, e é exatamente sobre isso, o mindset de API Economy. Obrigado por quem leu até aqui, nos vemos no próximo!
