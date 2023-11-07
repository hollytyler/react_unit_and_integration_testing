describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


it('should update the running total display when number buttons are clicked', () => {
  cy.get('#number2').click();
  cy.get('.display').should('contain', '2');
  cy.get('#number3').click();
  cy.get('.display').should('contain', '23');
});

it('should update the display with the result of arithmetic operations', () => {
  cy.get('#number2').click();
  cy.get('#operator-add').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '4');
});

it('should allow chaining of multiple operations', () => {
  cy.get('#number3').click();
  cy.get('#operator-add').click();
  cy.get('#number1').click();
  cy.get('#operator-subtract').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '2');
});

it('should add positive numbers correctly', () => {
  cy.get('#number5').click();
  cy.get('#operator-add').click();
  cy.get('#number3').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '8');
});

it('should subtract positive numbers correctly', () => {
  cy.get('#number7').click();
  cy.get('#operator-subtract').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '5');
});

it('should multiply positive numbers correctly', () => {
  cy.get('#number4').click();
  cy.get('#operator-multiply').click();
  cy.get('#number6').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '24');
});

it('should divide positive numbers correctly', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator-divide').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '5');
});

it('should add positive numbers to output a negative result', () => {
  cy.get('#number2').click();
  cy.get('#operator-subtract').click(); 
  cy.get('#number4').click(); 
  cy.get('#operator-equals').click(); 
  cy.get('.display').should('contain', '-2'); 
});

it('should add decimal numbers correctly', () => {
  cy.get('#number2').click();
  cy.get('#decimal').click();
  cy.get('#number5').click();
  cy.get('#operator-add').click();
  cy.get('#number1').click();
  cy.get('#decimal').click();
  cy.get('#number3').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '3.8');
});

it('should add very large numbers correctly', () => { 
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#operator-add').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '1999999999998');
});

it('should subtract very large numbers correctly', () => {
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#operator-subtract').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number8').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '1');
});

it('should handle division by zero gracefully', () => {
  cy.get('#number5').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'Infinity');
})
});