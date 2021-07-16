/// <reference types="cypress" />
const width = [1200, 1090]

width.forEach(width => {
    context(`Landing page - ${width}px`, () => {
    beforeEach(() => {
        cy.visit('/')
        cy.viewport(width, 900)
    });

        it('Navegar para o cadastro de aulas', () => {
            cy.get('div a.give-classes').click()
            cy.url().should('contain', 'give-classes')
        });

        it('Navegar para pesquisa de professores', () => {
            cy.get('div a.study').click()
            cy.url().should('contain', 'study')
        });
    });
})