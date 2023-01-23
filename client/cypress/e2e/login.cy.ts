describe('Starting e2e for Login', () => {

    beforeEach(() => {
      cy.visit('/login');
    });

    it('has the correct title', () => {
      cy.title().should('equal', 'Devport');
    });
  
    it('Should login properly', () => {
      cy.get('#email').type('test@gmail.com');
      cy.get('#password').type('1234567');
      cy.get('#submit-btn').click();
      cy.visit('/dashboard');
    })

   

  })
  
  