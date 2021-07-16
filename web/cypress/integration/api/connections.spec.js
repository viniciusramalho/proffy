/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections endpoint', () => {
    it('GET - Obter conexões', () => {
        
        //cy.api para retornar visualmente na execução (@bahmutov/cy-api)
        cy.api({
            method: `${Cypress.config().apiUrl}/connections`,
            url: '',
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) =>{
            //asserts de retorno da API
            expect(response.status).to.eq(200)

            expect(response.duration).lessThan(20) //resposta menor que x ms

            expect(response.body)
                .to.have.property('total')
                .to.be.a('number')
                .greaterThan(5)

            expect(response.body.total)
                .an('number')
                .satisfy((totalValue) => { return totalValue >= 5})
        })
    });
});