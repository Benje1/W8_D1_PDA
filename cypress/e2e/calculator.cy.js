describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should be able to calculate 2 + 2', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  it('should be able to calculate 2 - 2', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })
  it('should be able to calculate 2 * 2', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  it('should be able to calculate 2 / 2', () => {
    cy.get('#number2').click();
    cy.get("#operator-divide").click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1')
  })
  it('should be able to chain operations together', () => {
    cy.get('#number2').click();
    cy.get("#operator-divide").click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '25')
  })
  it('should be able to deal with the unexpected', () => {
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get("#operator_add").click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.2')
  })
  it('should be able to deal with the unexpected', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6')
  })
  it('should be able to deal with the unexpected', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4782969')
  })
  it('should divide by 0', () => {
    cy.get('#number9').click();
    cy.get("#operator-divide").click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error')
  })
})

/* . Do the number buttons update the display of the running total?
5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement). */