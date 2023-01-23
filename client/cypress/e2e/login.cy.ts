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
      
      it('should add a basic info to the server', () => {
        cy.get('#sideBasic').click({force: true});
        cy.get('#fullName1').type('Kazi shuhat');
        cy.get('#jobTitle1').type('Angular');
        cy.get('#email1').type('kazi@gmail.com');
        cy.get('#careerObj1').type('Want To be an angular developer');
        cy.get('#skills1').type('Angular', {force: true});
        cy.get('#skillBtn1').click({force: true});
        cy.get('#submit1').click({force: true});
      })


    })

   

  })
  
  