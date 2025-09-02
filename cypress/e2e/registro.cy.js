import { faker } from '@faker-js/faker'

describe('Funcionalidade: Registro de utilizador', () => {
  
  before(()=>{
    cy.fixture('known_user').then(user => {
      cy.start()
      cy.login(user.email, user.name, user.password)

      // VERIFICAÇÃO: Valida se a modal de erro foi exibida com a mensagem correta
      cy.get('#modalText')
        .should('be.visible')
        .and('contain', 'foi criada com sucesso');
    });
  })

  beforeEach(() => {
    cy.start()
  })

  it('CT01 - Deve registar um novo utilizador com sucesso com saldo', () => {
    const email = faker.internet.email();
    const nome = faker.person.fullName();
    const senha = faker.internet.password({ length: 8, prefix: 'A1!' });

    cy.login(email, nome, senha)

    // Validações finais
    cy.get('#modalText').should('be.visible');
    cy.get('#modalText').should(texto => {
      expect(texto).to.contain('A conta');
      expect(texto).to.contain('foi criada com sucesso');
    });

    cy.get('#btnCloseModal').click();
  });

  it('CT02 - Deve falhar ao tentar registar um e-mail já existente (Fixture)', () => {
    // Dados no fixtures
    cy.fixture('known_user').then(user => {

      cy.login(user.email, user.name, user.password)

      // VERIFICAÇÃO: Valida se a modal de erro foi exibida com a mensagem correta
      cy.get('#modalText')
        .should('be.visible')
        .and('have.text', 'Este email já está sendo usado.');
    });
  });
})