# IA na Prática: Acelerando o Desenvolvimento e Garantindo a Qualidade

![CI](https://github.com/Miriam8467/copilot_ia.git/actions/workflows/ci.yml/badge.svg)

## 1. Contexto do Desafio

Este projeto simula o cenário de uma empresa que desenvolve uma ferramenta de colaboração
online e enfrenta dificuldades para equilibrar **velocidade de entrega** e **qualidade de código**.

A pressão por novas funcionalidades aumentou devido a campanhas de marketing recentes,
expondo gargalos no fluxo de trabalho da equipe de engenharia, como:
- Baixa cobertura de testes
- Bugs identificados tardiamente
- Revisões de código lentas
- Implementações inconsistentes entre desenvolvedores

A equipe é composta majoritariamente por desenvolvedores júnior e pleno, que enxergam
a escrita de testes como uma atividade custosa e pouco atrativa.

---

## 2. O Papel da Inteligência Artificial no Desenvolvimento de Software

A Inteligência Artificial aplicada ao desenvolvimento atua como um **acelerador de produtividade**,
sem substituir boas práticas de engenharia.

### 2.1 Geração de Código
Ferramentas como o **GitHub Copilot** auxiliam na criação de funções, validações e estruturas
básicas de código, reduzindo tempo gasto com tarefas repetitivas e aumentando a consistência.

### 2.2 Geração de Testes Automatizados
O Copilot também pode ser utilizado para gerar testes unitários a partir do código existente,
diminuindo a resistência da equipe à escrita de testes.

Conforme discutido por Martin Fowler, cobertura de testes deve ser vista como um **indicador de
confiança**, e não apenas como uma métrica numérica isolada.

### 2.3 Integração Contínua com GitHub Actions
O uso do **GitHub Actions** permite a automação da execução de testes a cada push ou pull request,
proporcionando feedback rápido e reduzindo o custo de correção de defeitos.

---

## 3. Caso Real de Uso

Estudos divulgados pelo próprio GitHub indicam que equipes que utilizam o GitHub Copilot
conseguem concluir tarefas até **55% mais rápido**, mantendo ou melhorando a qualidade do código.

Empresas como **Microsoft** e **Shopify** relataram ganhos expressivos de produtividade e
padronização ao integrar IA ao fluxo diário de desenvolvimento.

---

## 4. Descrição do Projeto

Este repositório contém uma API simples em Node.js que demonstra:
- Uso de IA (GitHub Copilot) para geração de código de negócio
- Geração assistida de testes unitários
- Pipeline de Integração Contínua com GitHub Actions

Os testes são executados automaticamente a cada alteração no código, garantindo feedback
contínuo para a equipe de desenvolvimento.

---

## 5. Execução do Projeto

### Instalar dependências
```bash
npm install

### Executar testes
npm test

