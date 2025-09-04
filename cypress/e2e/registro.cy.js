import { faker } from '@faker-js/faker'

describe('Funcionalidade: Registro de utilizador', () => {

  before(() => {
    cy.fixture('known_user').then(user => {
      cy.start()
      cy.register(user.email, user.name, user.password, user.password)

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

    cy.register(email, nome, senha, senha)

    // Validações finais
    cy.get('#modalText').should('be.visible');
    cy.get('#modalText').should(texto => {
      expect(texto).to.contain('A conta');
      expect(texto).to.contain('foi criada com sucesso');
    });

    cy.get('#btnCloseModal').click();
  });

  it('CT02 - Deve falhar ao tentar registar um e-mail já existente (Fixture)', ()=> {
    // Dados no fixtures
    cy.fixture('known_user').then(user => {

      cy.register(user.email, user.name, user.password, user.password)

      // VERIFICAÇÃO: Valida se a modal de erro foi exibida com a mensagem correta
      cy.get('#modalText')
        .should('be.visible')
        .and('have.text', 'Este email já está sendo usado.');
    });
  });

  it('CT03 - Deve exibir mensagens de erro para campos obrigatórios', () => {

    cy.contains('button', 'Registrar').click();

    cy.get('div.card__register')
      .contains('button', 'Cadastrar')
      .click({ force: true });

    cy.get('div.card__register')
      .find('p.input__warging') // Encontra todos os parágrafos de erro
      .should('have.length', 4) // Espera até que todos os 4 estejam no DOM
      .and('be.visible');

    cy.get('input[name="email"] + p')
      .should('exist')
      // .and('have.css', 'opacity', '1')
      // .and('be.visible')
      .and('have.text', 'É campo obrigatório')

    cy.get('input[name="name"] + p')
      .should('exist')
      // .and('have.css', 'opacity', '1')
      // .and('be.visible')
      .and('have.text', 'É campo obrigatório')

    cy.get('input[name="password"] + p')
      .should('exist')
      // .and('have.css', 'opacity', '1')
      // .and('be.visible')
      .and('have.text', 'É campo obrigatório')

    cy.get('input[name="passwordConfirmation"] + p')
      .should('exist')
      // .and('have.css', 'opacity', '1')
      // .and('be.visible')
      .and('have.text', 'É campo obrigatório')
  });

  it('CT04 - Deve exibir mensagem de erro ao tentar registar com senhas de confirmação diferentes', () => {
    const email = faker.internet.email();
    const nome = faker.person.fullName();
    const senha = faker.internet.password({ length: 8, prefix: 'A1!' });
    const senhaConfirm = faker.internet.password({ length: 8, prefix: 'A1!' });

    cy.register(email, nome, senha, senhaConfirm)

    // Validações finais
    cy.get('#modalText')
      .should('be.visible')
      .and('have.text', 'As senhas não são iguais.\n')

  });
})