describe('Natty Boyz Saturday Tee Times - 3rd & 4th', () => {
  it('Should book the 3rd and 4th tee times', function() {
    cy.visit('https://apps.invitedclubs.com/portal/pls/portal/!CCTTWEB.controller?ID=b6438ad2b25c7677493424362be7c57e');
    cy.get('#home_club').click();
    cy.get('div.cc-tab.cc-selectable:last-child').click();
    cy.get('.cc-blank-td-row').parent().siblings().eq(17).find('.cc-multigrab-action.cc-selectable').click();
    cy.get('.cc-ptype').each((playerSelect, index) => {
      if (index !== 0)
        cy.wrap(playerSelect).select('LOV_PT_TBD');
    });
    // cy.get('#save_button').click();
  });
});