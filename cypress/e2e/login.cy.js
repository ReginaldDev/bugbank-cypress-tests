describe('Funcionalidade: Login', () => {

    before(() => {
        cy.fixture('login_user').then(user => {
            cy.start()
            cy.register(user.email, user.name, user.password)

            // VERIFICAÇÃO: Valida se a modal de erro foi exibida com a mensagem correta
            cy.get('#modalText')
                .should('be.visible')
                .and('contain', 'foi criada com sucesso');
        });
    })

    beforeEach(() => {
        cy.start()
    })

    it('CT04 - Deve realizar login com um utilizador válido', () => {

        cy.fixture('login_user').then(user => {

            cy.login(user.email, user.password)

            cy.get('#textName')
                .should('be.visible')
                .and('contain.text', user.name)
            cy.contains('p', 'bem vindo ao BugBank :)')
                .should('be.visible')
        })
    })

    it('CT05 - Deve tentar realizar login com uma senha inválida ', () => {

        cy.fixture('login_user').then(user => {

            cy.login(user.email, user.invalidPassword)

            cy.get('#modalText')
                .should('be.visible')
                .and('have.text', 'Usuário ou senha inválido.\nTente novamente ou verifique suas informações!')
        })
    })
})