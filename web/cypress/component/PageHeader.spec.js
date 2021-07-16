/// <reference types="cypress" />

import React from 'react'
import PageHearder from '../../src/components/PageHeader'
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'


context('PageHeader component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '__root/src/components/PageHearder/styles.css'

    it('deve ser renderizado com sucesso', () => {
        const title = "Que incrível que você quer dar aulas."
        const description = "Agilizei"

        mount(
            <Router>
                <PageHearder
                    title={title}
                    description= {description}
                />
            </Router>
            ,
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        cy.get('strong').as('title').should('have.text', title)
        cy.get('p').as('description').should('have.text', description)

        cy.get('.page-header').then(($elemento) => {
            //cy.log($elemento.css('background-color'))
            expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
        });


    });
});