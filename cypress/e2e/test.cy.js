describe('template spec', () => {

  beforeEach(() => {
    cy.visit("/")
    //cy.login()
    cy.Signup()
  })

  const email = `safi.blackcurrant+${Math.round(Math.random()*100)}@gmail.com`
  it('passes', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.form-group.ng-star-inserted > label').should('have.text', 'Azmeel employee ID *');
    cy.get(':nth-child(2) > label').should('have.text', 'Full name *');
    cy.get(':nth-child(3) > label').should('have.text', 'Email *');
    cy.get(':nth-child(4) > label').should('have.text', 'Phone *');
    cy.get(':nth-child(5) > label').should('have.text', 'Country of residence *');
    cy.get('#azmeelEmpId').type('45465514');
    cy.get('#fullName').type('Safi Naqvi');
    cy.get('#email').type(email);
    // cy.get('.mat-mdc-form-field-infix').select(' +1268')

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#mat-select-value-1').click();
    cy.get('#mat-option-13 > .mdc-list-item__primary-text').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#phone').clear('89');
    cy.get('#phone').type('897845128');
    cy.get('#country').select('Armenia');
    cy.get('.text-center > .btn').click();
    cy.wait(3000);
    const otp = 'L4T8DR';
    cy.get('input').each((r,index) => {
      if(otp[index]){
        cy.wrap(r).type(otp[index])
      }
    })

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#password').clear('A');
    cy.get('#password').type('Azmeel@123');
    cy.get('#confirmPassword').clear();
    cy.get('#confirmPassword').type('Azmeel@123');
    cy.get('.text-center > .btn').click();
    /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.mt-4 > .btn').click();
      cy.get(':nth-child(2) > :nth-child(1) > .form-group > label').should('have.text', 'Full name*');
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(1) > label').should('have.text', 'Nationality*');
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .form-group > label').should('have.text', 'Country of residence*');
      cy.get(':nth-child(1) > .date-group > label').should('have.text', 'Date of birth*');
      cy.get('.mt-3 > :nth-child(2) > label').should('have.text', 'Address for correspondence*');
      cy.get('.mt-3 > :nth-child(3) > :nth-child(2) > .form-group > label').should('have.text', 'Mobile number*');
      cy.get(':nth-child(4) > :nth-child(2) > .form-group > label').should('have.text', 'Date of document expire*');
      cy.get(':nth-child(4) > :nth-child(1) > .form-group > label').should('have.text', 'ID for authorised individual*');
      cy.get('#fullName').clear('S');
      cy.get('#fullName').type('Safi Naqvi');
      cy.get('#employeeId').clear();
      cy.get('#employeeId').type('45465514');
      cy.get('#iqamaNumber').clear();
      cy.get('#iqamaNumber').type('8486547895');
      cy.get('#passportNumber').clear();
      cy.get('#passportNumber').type('M45{enter}');
      cy.get('fieldset > .text-center > .btn').click();
      cy.get('#passportNumber').clear();
      cy.get('#passportNumber').type('M4587{enter}');
      cy.get('fieldset > .text-center > .btn').click();
      cy.get('#passportNumber').clear();
      cy.get('#passportNumber').type('M45877956');
      cy.get(':nth-child(1) > .date-group > .input-group > .input-group-text > .ri-calendar-2-line').click();
      cy.get(':nth-child(2) > [data-mat-col="2"] > .mat-calendar-body-cell > .mat-calendar-body-cell-content').click();
      cy.get('#correspondenceAddress').type('Dammam');
      cy.get('#fileInput').selectFile('Dummy.pdf');
      cy.get(':nth-child(2) > .form-group > .input-group > .input-group-text > .ri-calendar-2-line').click();
      cy.get(':nth-child(4) > [data-mat-col="4"] > .mat-calendar-body-cell > .mat-calendar-body-cell-content').click();
      cy.get('fieldset > .text-center > .btn').click();
      cy.get('#signatureSwitch').click();
      cy.get('#file').selectFile('Dummy.pdf');
      cy.get('div.ng-star-inserted > .text-center').click();
      /* ==== End Cypress Studio ==== */
  })
})