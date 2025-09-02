import { faker } from '@faker-js/faker'

describe('template spec', () => {

  beforeEach(() => {
    cy.start()
  })

  it('CT01 - Deve registar um novo utilizador com sucesso com saldo', () => {
    const email = faker.internet.email();
    const nome = faker.person.fullName();
    const senha = faker.internet.password({ length: 8, prefix: 'A1!' });

    cy.contains('button', 'Registrar').click();
    // APLICAÇÃO DE { force: true }:
    // A animação de "flip card" desta aplicação impede a interação padrão do Cypress.
    // Após múltiplas tentativas com esperas explícitas e asserções de visibilidade,
    // o uso de { force: true } foi a única solução viável para garantir a execução do teste.
    
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
      .type(senha, { force: true });

    // Interação 5: Toggle de Saldo
    cy.get('div.card__register')
      .find('#toggleAddBalance')
      .click({ force:true });

    // Interação 6: Botão Cadastrar
    cy.get('div.card__register')
      .contains('button', 'Cadastrar')
      .click({ force:true });

    // Validações finais
    cy.get('#modalText').should('be.visible');
    cy.get('#modalText').should(texto => {
      expect(texto).to.contain('A conta');
      expect(texto).to.contain('foi criada com sucesso');
    });

    cy.get('#btnCloseModal').click();
  });
})