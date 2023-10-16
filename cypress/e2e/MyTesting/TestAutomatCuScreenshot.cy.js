cddescribe('OrangeHrm', () => {
    // Testu verifica daca ma pot conecta in OrangeHRM si daca nu ma pot conecat imi face un screenshot
    it('test de Login cu screenshot', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');//introduc username in camp
      cy.get('input[type="password"]').type('admin123');//introduc parola in camp
      cy.get('.oxd-button').click(); //dau click si ma loghez
  
      cy.get('.oxd-topbar-header-title').should('exist').then(($element) => { //verific daca selectorul .oxd-topbar-header-title exista ,fac o verificare si daca nu exista atunci imi face un screenshot
        if ($element.length === 0) {
          cy.screenshot('conectare_esuata.png');
        } else { //daca imi gaseste elementul astfel ma duce la selectorul .('.oxd-topbar-body-nav-slot > .oxd-icon-button si vede daca exista si nu mai face screenshot.
            cy.wait(1000)
            cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button').should('exist');
       
        }
      });
    });
  });