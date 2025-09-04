// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("start", ()=>{
    cy.visit('https://bugbank.netlify.app')
    cy.viewport(1440, 900)
})

Cypress.Commands.add("register", (email, nome, senha, senhaConfirm)=>{
    cy.contains('button', 'Registrar').click();

    // Interação 1: Email
    cy.get('div.card__register')
      .should('be.visible')
      .find('input[name="email"]')
      .type(email, { force: true });

    // Interação 2: Nome (Re-selecionamos o 'div.card__register')
    cy.get('div.card__register')
      .find('input[name="name"]')
      .type(nome, { force: true });

    // Interação 3: Senha (Re-selecionamos novamente)
    cy.get('div.card__register')
      .find('input[name="password"]')
      .type(senha, { force: true });

    // Interação 4: Confirmação de Senha
    cy.get('div.card__register')
      .find('input[name="passwordConfirmation"]')
      .type(senhaConfirm, { force: true });

    // Interação 5: Toggle de Saldo
    cy.get('div.card__register')
      .find('#toggleAddBalance')
      .click({ force: true });

    // Interação 6: Botão Cadastrar
    cy.get('div.card__register')
      .contains('button', 'Cadastrar')
      .click({ force: true });

    
})

Cypress.Commands.add("login", (email, senha)=>{
  
  cy.get('div.card__login')
      .should('be.visible')
      .find('input[name="email"]')
      .type(email, { force: true });
  
  cy.get('div.card__login')
    .find('input[name="password"]')
    .type(senha, { force: true });  
      
  cy.get('div.card__login')
    .contains('button', 'Acessar')
    .click({ force: true });
})