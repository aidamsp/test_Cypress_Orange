import selectores from "../selectores/selectores"
     
     
     Cypress.Commands.add('escribir', (selector, texto, tiempo) => {
       cy.get(selector).type(texto)
       cy.wait(tiempo)
     })
     Cypress.Commands.add('cliquear', (selector, tiempo) => {
       cy.wait(tiempo) 
       cy.get(selector).click()
        
     })
     Cypress.Commands.add('esperar', (tiempo) => {
        cy.wait(3000) 
               
     })
     Cypress.Commands.add('login', () => {
      cy.fixture('./login').then
      ((login)=> {
        cy.escribir(selectores.login.user, login.user, 1000)
        cy.escribir(selectores.login.pass, login.pass, 1000)
        cy.cliquear(selectores.login.btn_login, 2000)
      })
             
   })






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