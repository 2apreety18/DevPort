describe('Basic Form',()=>{

    beforeEach(() => {
      cy.visit('/dashboard');
    });

    it('should add a basic info to the server', () => {
      cy.get('#fullName1').type('Kazi shuhat');
      cy.get('#jobTitle1').type('Angular');
      cy.get('#email1').type('kazi@gmail.com');
      cy.get('#careerObj1').type('Want To be an angular developer');
      cy.get('#skills1').type('Angular', {force: true});
      cy.get('#skillBtn1').click({force: true});
      cy.get('#submit1').click({force: true});
    })

  })
