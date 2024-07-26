describe('Natty Boyz Saturday Tee Times - 1st & 2nd', () => {
  it('Should book the 1st and 2nd tee times', function() {
    cy.visit('https://apps.invitedclubs.com/portal/pls/portal/!CCTTWEB.controller?ID=84c3c5f5fb53af90045241ec7cee8364');
    cy.get('#home_club').click();
    cy.get('div.cc-tab.cc-selectable:last-child').click();
    cy.get('.cc-blank-td-row').parent().siblings().eq(15).find('.cc-multigrab-action.cc-selectable').click();
    cy.get('.cc-ptype').each((playerSelect, index) => {
      if (index !== 0)
        cy.wrap(playerSelect).select('LOV_PT_TBD');
    });
    // cy.get('#save_button').click();
  });
});