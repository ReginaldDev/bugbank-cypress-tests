# Projeto de Automação de Testes E2E - BugBank 🐞

Este repositório contém um projeto de automação de testes End-to-End (E2E) para a aplicação fictícia **BugBank**, desenvolvido com o objetivo de demonstrar competências em automação de testes web utilizando Cypress.

## 🎯 Objetivo

O objetivo deste projeto é validar as funcionalidades críticas da aplicação BugBank, simulando o fluxo de um utilizador real. Os testes cobrem cenários de sucesso (happy path) e de erro (sad path), garantindo a robustez e a fiabilidade da plataforma. Este projeto demonstra práticas de organização, escrita de testes e documentação num ambiente de QA.

## 🛠️ Tecnologias Utilizadas

* **Automação de Testes:** Cypress
* **Linguagem:** JavaScript
* **Gestor de Pacotes:** NPM
* **CI/CD:** GitHub Actions (a ser implementado)

## 🚀 Como Executar o Projeto

**Pré-requisitos:**
* Node.js instalado
* Git instalado

**Passos:**

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/ReginaldDev/bugbank-cypress-tests.git](https://github.com/ReginaldDev/bugbank-cypress-tests.git)
    ```
2.  **Navegar para a pasta do projeto:**
    ```bash
    cd bugbank-cypress-tests
    ```
3.  **Instalar as dependências:**
    ```bash
    npm install
    ```
4.  **Executar os testes em modo Headless (terminal):**
    ```bash
    npx cypress run
    ```
5.  **Abrir a interface interativa do Cypress:**
    ```bash
    npx cypress open
    ```

## 📋 Cenários de Teste

A tabela abaixo detalha os casos de teste planeados para a automação.

| ID   | Funcionalidade       | Cenário de Teste                                             | Prioridade | Status          |
| :--- | :------------------- | :----------------------------------------------------------- | :--------- | :-------------- |
| **CT01** | Registo de Utilizador | Registar um novo utilizador com sucesso com saldo.           | Alta       | A Implementar   |
| **CT02** | Registo de Utilizador | Tentar registar um utilizador com um e-mail já existente.    | Média      | A Implementar   |
| **CT03** | Registo de Utilizador | Validar campos obrigatórios (e-mail, nome, senhas).        | Média      | A Implementar   |
| **CT04** | Login                | Realizar login com um utilizador válido.                     | Alta       | A Implementar   |
| **CT05** | Login                | Tentar realizar login com uma senha inválida.                | Média      | A Implementar   |
| **CT06** | Transferência        | Realizar uma transferência com sucesso e validar os saldos.  | Alta       | A Implementar   |
| **CT07** | Transferência        | Tentar realizar uma transferência com valor maior que o saldo. | Média      | A Implementar   |
| **CT08** | Extrato              | Validar que a transferência realizada consta no extrato.     | Alta       | A Implementar   |
| **CT09** | Extrato              | Validar que o saldo do extrato corresponde ao saldo da home. | Baixa      | A Implementar   |

---
*Projeto desenvolvido por Reginaldo Junior como parte do seu portfólio de Quality Assurance.*