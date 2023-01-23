describe('Basic Form',()=>{

    beforeEach(() => {
      cy.visit('/dashboard');
    });

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

    it('should add user account info to the server', () => {
      cy.get('#sideUser').click({force: true});
      cy.get('#githubLink').type('2apreety18');
      cy.get('#stackOverflowLink').type('https://stackoverflow.com/');
      cy.get('#leetcodeLink').type('https://leetcode.com/');
      cy.get('#submit1').click({force: true});
    })

    it('should add education account info to the server', () => {
      cy.get('#sideEducation').click({force: true});

      cy.get('#eduLevel1').type('eduLevel1');
      cy.get('#instName1').type('instName1');
      cy.get('#eduDescription1').type('eduDescription1');

      cy.get('#eduLevel2').type('eduLevel2');
      cy.get('#instName2').type('instName2');
      cy.get('#eduDescription2').type('eduDescription2');

      cy.get('#eduLevel3').type('eduLevel3');
      cy.get('#instName3').type('instName3');
      cy.get('#eduDescription3').type('eduDescription3');

      cy.get('#submit1').click({force: true});
    })

    it('should add experience account info to the server', () => {
      cy.get('#sideExperience').click({force: true});

      cy.get('#companyName1').type('companyName1');
      cy.get('#jobRole1').type('jobRole1');
      cy.get('#jobDescription1').type('jobDescription1');

      cy.get('#companyName2').type('companyName2');
      cy.get('#jobRole2').type('jobRole2');
      cy.get('#jobDescription2').type('jobDescription2');

      cy.get('#companyName3').type('companyName3');
      cy.get('#jobRole3').type('jobRole3');
      cy.get('#jobDescription3').type('jobDescription3');

      cy.get('#submit1').click({force: true});
    })

    it('should add project account info to the server', () => {

      cy.get('#sideProject').click({force: true});

      cy.get('#projectTitle1').type('projectTitle1', {force: true} );
      cy.get('#demovideo1').type('demovideo1', {force: true} );
      cy.get('#projectDescription1').type('projectDescription1', {force: true} );

      cy.get('#projectTitle2').type('projectTitle2', {force: true} );
      cy.get('#demovideo2').type('demovideo2', {force: true} );
      cy.get('#projectDescription2').type('projectDescription2', {force: true} );

      cy.get('#projectTitle3').type('projectTitle3', {force: true} );
      cy.get('#demovideo3').type('demovideo3', {force: true} );
      cy.get('#projectDescription3').type('projectDescription3', {force: true} );

      cy.get('#submit1').click({force: true});
    })


  })
