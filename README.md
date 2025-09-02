<details>
<summary>🇬🇧 <strong>View in English</strong></summary>

# E2E Test Automation Project - BugBank 🐞

This repository contains an End-to-End (E2E) test automation project for the fictional **BugBank** application, developed to demonstrate skills in web test automation using Cypress.

## 🎯 Objective

The objective of this project is to validate the critical functionalities of the BugBank application by simulating a real user's workflow. The tests cover both happy path and sad path scenarios, ensuring the platform's robustness and reliability. This project showcases best practices in QA project organization, test scripting, and documentation.

## 🛠️ Technologies Used

* **Test Automation:** Cypress
* **Language:** JavaScript
* **Package Manager:** NPM
* **CI/CD:** GitHub Actions (to be implemented)

## 🚀 How to Run the Project

**Prerequisites:**
* Node.js installed
* Git installed

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ReginaldDev/bugbank-cypress-tests.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd bugbank-cypress-tests
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run tests in Headless mode (terminal):**
    ```bash
    npx cypress run
    ```
5.  **Open the interactive Cypress Test Runner:**
    ```bash
    npx cypress open
    ```

## 📋 Test Scenarios

The table below details the test cases planned for automation.

| ID   | Feature             | Test Scenario                                                | Priority | Status              |
| :--- | :------------------ | :----------------------------------------------------------- | :------- | :------------------ |
| **TC01** | User Registration   | Successfully register a new user with a balance.             | High     | Passed ✅   |
| **TC02** | User Registration   | Attempt to register a user with an existing email.           | Medium   | Failed 🐛 [Bug #1](https://github.com/ReginaldDev/bugbank-cypress-tests/issues/1)  |
| **TC03** | User Registration   | Validate required fields (email, name, passwords).           | Medium   | To Be Implemented   |
| **TC04** | Login               | Perform login with a valid user.                             | High     | To Be Implemented   |
| **TC05** | Login               | Attempt to login with an invalid password.                   | Medium   | To Be Implemented   |
| **TC06** | Money Transfer      | Perform a successful transfer and validate account balances. | High     | To Be Implemented   |
| **TC07** | Money Transfer      | Attempt a transfer with an amount greater than the balance.  | Medium   | To Be Implemented   |
| **TC08** | Account Statement   | Validate that the completed transfer appears on the statement. | High     | To Be Implemented   |
| **TC09** | Account Statement   | Validate that the statement balance matches the home page balance. | Low      | To Be Implemented   |

---
*Project developed by Reginaldo Junior as part of his Quality Assurance portfolio.*

</details>

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
    git clone https://github.com/ReginaldDev/bugbank-cypress-tests.git
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
| **CT01** | Registo de Utilizador | Registar um novo utilizador com sucesso com saldo.           | Alta       | Aprovado ✅   |
| **CT02** | Registo de Utilizador | Tentar registar um utilizador com um e-mail já existente.    | Média      | Falhou 🐛 [Bug #1](https://github.com/ReginaldDev/bugbank-cypress-tests/issues/1)   |
| **CT03** | Registo de Utilizador | Validar campos obrigatórios (e-mail, nome, senhas).        | Média      | A Implementar   |
| **CT04** | Login                | Realizar login com um utilizador válido.                     | Alta       | A Implementar   |
| **CT05** | Login                | Tentar realizar login com uma senha inválida.                | Média      | A Implementar   |
| **CT06** | Transferência        | Realizar uma transferência com sucesso e validar os saldos.  | Alta       | A Implementar   |
| **CT07** | Transferência        | Tentar realizar uma transferência com valor maior que o saldo. | Média      | A Implementar   |
| **CT08** | Extrato              | Validar que a transferência realizada consta no extrato.     | Alta       | A Implementar   |
| **CT09** | Extrato              | Validar que o saldo do extrato corresponde ao saldo da home. | Baixa      | A Implementar   |

---
*Projeto desenvolvido por Reginaldo Junior como parte do seu portfólio de Quality Assurance.*