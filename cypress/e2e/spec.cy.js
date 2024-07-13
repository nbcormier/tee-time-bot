describe('template spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('bookTeeTime', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://apps.invitedclubs.com/portal/pls/portal/!CCTTWEB.controller?ID=84c3c5f5fb53af90045241ec7cee8364');
    cy.get('#home_club').click();
    cy.get('#Tab-20240717 > .cc-day').click();
    cy.get('tr.cc-tee-time-row:last-child > td > span > span').click();
    cy.get('#save_button').click();
    /* ==== End Cypress Studio ==== */
  });
})