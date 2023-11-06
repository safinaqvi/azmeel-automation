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


Cypress.Commands.add('login' , () => {
    cy.intercept('POST','**/auth/creditor_login').as('login')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#emailId').clear('');
    cy.get('#emailId').type('safi.blackcurrant+saudi@gmail.com');
    cy.get('#password').clear();
    cy.get('#password').type('Azmeel@123');
    /* ==== End Cypress Studio ==== */
    cy.get('.mt-3 > .btn').click();
    const otp = 'L4T8DR';
    cy.wait('@login')
    cy.get('input').each((r,index) => {
        cy.wrap(r).type(otp[index])
    })
    cy.get('button[type=submit]').click()
})

Cypress.Commands.add('Signup', () => {
    cy.get('.text-primary').click();
})