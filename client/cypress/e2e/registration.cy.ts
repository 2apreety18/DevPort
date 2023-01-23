describe('Starting e2e', () => {

  beforeEach(() => {
    cy.visit('/signup');
  });
  it('has the correct title', () => {
    cy.title().should('equal', 'Devport');
  });

  // it('should nevigate to signup after clicking ', () => {
  //   cy.get('#negivate').click().visit('/signup');
  // })
  it('Should register and add basic info form', () => {
    cy.get('#email').type('test100@gmail.com');
    cy.get('#password').type('1234567');
    cy.get('#submit-btn').click();

    cy.get('#fullName1').type('Kazi shuhat');
    cy.get('#jobTitle1').type('Angular');
    cy.get('#email1').type('kazi@gmail.com');
    cy.get('#careerObj1').type('Want To be an angular developer');
    cy.get('#skills1').type('Angular', { force: true });
    cy.get('#skillBtn1').click({ force: true });
    cy.get('#submit1').click({ force: true });
  })
})

