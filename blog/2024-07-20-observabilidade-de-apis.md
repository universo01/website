---
slug: observabilidade-de-apis
title: Observabilidade de APIs
authors: [it0dan]
tags: [APIs, observabilidade, monitoramento, MELT, RED, RUM]
---

# Observabilidade de APIs

Em um mundo de aplicações distribuídas, APIs têm papel chave. Conectando sistemas para alavancar negócios e elevar a experiência do desenvolvedor para outro nível. Dado o cenário atual, temos cada vez mais serviços e consequentemente APIs, e precisamos de governança e segurança para que possamos garantir a qualidade e integridade das soluções que oferecemos. Por isso, fazer com que nossas APIs sejam observáveis é essencial para que elas cumpram seu propósito principal, que é ser utilizada.

Nesse conteúdo aprofundaremos no conceito de observabilidade no contexto de APIs. O que é essencial observarmos e boas práticas utilizadas para que através dos dados de telemetria das APIs consigamos trabalhar de forma preditiva, evitando impacto no relacionamento com seu ecossistema de parceiros e clientes.

## Definição moderna de APIs

API é acrônimo de Application Programming Interface e significa interface programável da aplicação. Permite que diferentes sistemas consigam integrar entre si sem que eles precisem expor suas regras e lógicas de negócio. Isso tudo através de um contrato (swagger) utilizando a Especificação OpenAPI. Dado o cenário atual do mercado, onde cada vez mais empresas vem se tornando empresas de tecnologia, migrando suas estratégias de negócio para o digital e modernizando sua arquitetura para o contexto de eventos e microsserviços, as APIs têm papel fundamental pois elas habilitam a comunicação por todo esse ecossistema distribuído. Com isso, APIs não são apenas ativos técnicos da organização, e sim ativos de negócio, onde a estratégia de APIs deve estar alinhada com a estratégia de negócios para que empresas consigam sobreviver a esse campo de batalha digital.

## Monitoramento & Observabilidade

É importante definir e diferenciar monitoramento de observabilidade, por vezes ocorre confusão na compreensão desses conceitos que parecem a mesma coisa mas não são.

Monitoramento é a ação de coletar, processar, analisar, agregar e disponibilizar dados sobre os sistemas em tempo real. E com isso nos auxiliar na detecção de um problema de forma ágil.

Observabilidade é definido como um mecanismo focado em coletar dados de telemetria para entender o que causou ou está causando problema na nossa aplicação. Então diferente do monitoramento que auxilia na análise e detecção de um problema, a observabilidade deve ter a capacidade de explicar o porquê daquele comportamento.

Dito isso, podemos entender que esses dois conceitos aplicados em arquitetura moderna e distribuída são simbióticos. Monitorar nossas APIs é essencial para que possamos trazer observabilidade e com isso investigar e resolver problemas da forma mais rápida possível, gerando o mínimo de impacto nos consumidores dessas APIs.

## MELT

MELT é um acrônimo para métricas, eventos, logs e traces. São considerados tipos de dados de telemetria essenciais para observabilidade.

- **Métricas** são medidas numéricas coletadas durante o tempo. Como por exemplo o total de requisições ou taxa de erro de um período.
- **Eventos** são ações que aconteceram ou estão acontecendo em um determinado intervalo de tempo. Por exemplo, quando um pedido é realizado por um cliente, ou o reabastecimento de produtos por um parceiro ou mesmo um ataque DDoS que a API está sofrendo.
- **Logs** são linhas de texto que sistemas produzem quando determinados blocos de código são executados. No contexto das APIs, quando requisições são realizadas. Dessa forma são salvos dados como quando foi feita a requisição, qual a API, URI, recurso, operação, método e etc.
- **Traces** são interações entre componentes que aconteceram durante a requisição e a resposta. É o passo-a-passo de todo fluxo de chamada de uma API. Como por exemplo por quais sistemas ela percorreu, quais as manipulações e validações foram realizadas bem como a origem, para onde foi encaminhada e quanto tempo gastou em cada ação.

Se tratando de APIs, é primordial trazermos dados de telemetria de métricas, eventos, logs e trace para que possamos ser mais assertivos na detecção dos sintomas e encontrar a causa raiz de algo que pode estar acontecendo e impactando os consumidores.

## Golden Signals

Agora que sabemos os tipos de dados de telemetria que devemos observar, precisamos entender quais são os sinais que serão gerados a partir desses dados que vão nos indicar quando o comportamento das nossas APIs está anormal.

O termo "sinais dourados" vem do livro Google SRE e representam quatro sinais essenciais que devem ser monitorados. A recomendação é que se você pode monitorar apenas quatro sinais, que sejam eles.

- **Latência** - Tempo total da realização de uma chamada. Ela pode ser subdividida na latência do serviço A, latência do serviço B, latência de rede, latência do gateway e etc.
- **Tráfego** - Medida que determina a quantidade de atividades que a aplicação está recebendo. No contexto das APIs geralmente são a quantidade de requisições por segundo (RPS) ou a quantidade de requisições por minuto (RPM).
- **Erro** - Taxa de requisições que falharam de forma explícita, como erros de servidor ou de cliente representados através do status code. Ou de forma implícita, quando o status code de retorno é de sucesso mas no payload do response consta mensagem de erro.
- **Saturação** - Medida do quão cheio um serviço está. Podemos medi-la através da porcentagem de utilização de CPU, memória, largura da banda de rede e etc.

Com esses sinais dourados devemos ser capazes de identificar a causa raíz de qualquer problema com os nossos serviços. Inclusive um pode ser indicativo ou consequência do outro. Por exemplo, seu serviço tem aumento significativo no tráfego (RPS acima da média), com isso ele começa a saturar e consequentemente aumentar sua latência, ocasionando erros de timeout.

## RED framework

RED é um framework derivado dos 4 sinais dourados e nos dias atuais é o mais utilizado se tratando do monitoramento de microsserviços. Criado por Tom Wilkie, esse framework vem em contrapartida a utilização do framework USE, que é amplamente utilizado, mas com forte contexto de infraestrutura. Esse artigo explora toda a problemática do USE e como ele não se encaixa totalmente no monitoramento de serviços distribuídos. RED é baseado em 3 sinais:

- **Rate** - Quantidade de requisições por segundo ou minuto.
- **Error** - Quantidade de requisições falhas.
- **Duration** - Tempo de processamento de uma chamada.

Totalmente aplicável ao contexto de APIs, esses são geralmente os sinais que mensuramos para monitorar e garantir que nossas APIs estão altamente disponíveis e saudáveis. E com eles podemos destrinchar análises secundárias que nos darão diversos insights de negócio. Como por exemplo a quantidade de requisições por APIs, por aplicações, por IPs e etc. E a mesma lógica pode ser aplicada na quantidade de requisições falhas, onde poderíamos facilmente identificar que os erros estão vindo de uma aplicação que está com token expirado e está recebendo status code 401 entrando em um loop e aumentando nossa taxa de requisições falhas. Ou, analisando o aumento na duração das chamadas podemos correlacionar com a quantidade de requisições e entender que podemos estar sofrendo essa sobrecarga justamente pela quantidade de requisições acima da média em um dado período.

Para monitoramento de APIs, assim como para microsserviços, o framework RED é atualmente o mais utilizado. Com ele, conseguimos de forma simplificada monitorar dados essenciais das nossas APIs e consequentemente de forma simplificada identificar sintomas e a causa raíz do que está causando indisponibilidade ou intermitência no fluxo das integrações.

## RUM framework

Real User Monitoring é uma técnica de monitoramento passiva que vem ganhando muita expressão no mundo de DevOps. Diferente daquele modelo tradicional de monitoramento white-box, mais voltado para o comportamento interno das nossas aplicações, o monitoramento black-box vem sendo cada vez mais presente e necessário no mundo das operações. Esse tipo de monitoramento foca em monitorar o que o usuário vai enxergar, como por exemplos de qual aplicação foi realizado o acesso, por onde ele está acessando (geolocalização), o tipo de conectividade (3G, 4G…), jornada de compra e etc. Dado o contexto atual de mercado, onde cada vez mais clientes têm o poder de escolha, precisamos nos manter competitivos e para isso temos que entender a experiência que os usuários estão tendo com o que nós oferecemos para eles.

## Considerações finais

Não posso te dizer o que sua organização deve monitorar, são muitas variáveis e contextos diferentes. Mas entendendo os conceitos apresentados neste conteúdo você conseguirá elevar o monitoramento das suas APIs para outro nível, trazendo observabilidade e conseguindo reagir a problemas mesmo antes que aconteçam, gerando o mínimo de impacto possível para os consumidores.

Em um mundo cada vez mais distribuído, os casos de uso e contextos de negócio formam uma infinidade de possibilidades, com isso é de extrema importância entender esses conceitos fundamentais para conseguir adequá-los à sua lógica de negócio. Monitorar os dados certos só será possível se suas APIs forem observáveis. Para continuar competitivo no mercado atual precisamos olhar além de métricas internas, precisamos analisar métricas externas, para garantir a melhor experiência não só para as aplicações que estão consumindo as APIs, mas também para o usuário final.

Obrigado por ter lido até aqui, até a próxima!
