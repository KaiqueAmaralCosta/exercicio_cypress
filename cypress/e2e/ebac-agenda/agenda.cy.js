/// <reference types="cypress" />

describe('Teste da agenda ebac', () =>{
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Adicionar contato', () => {
        cy.get('input[type="text"]').type('Kaique Costa')
        cy.get('input[type="email"]').type('KaiqueCosta.amaral@gmail.com')
        cy.get('input[type="tel"]').type('11 990069057')
        cy.get('.adicionar').click()
    })

    it('Adicionar contato', () => {
        cy.get('input[type="text"]').type('Maria')
        cy.get('input[type="email"]').type('Maria@gmail.com')
        cy.get('input[type="tel"]').type('11 974015607')
        cy.get('.adicionar').click()
    })

    it('Alterar contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="tel"]').clear().type('11 9175982857')
        cy.get('.alterar').click()
    })

    it('Deletar contato', () => {
        cy.get('.delete').eq(2).click()
    })
})