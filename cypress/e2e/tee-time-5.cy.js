describe('Natty Boyz Saturday Tee Times - 5th', () => {
  it('Should book the 5th tee time', function() {
    cy.visit('https://apps.invitedclubs.com/portal/pls/portal/!CCTTWEB.controller?ID=8124aa9e7003645953dea353eaea32c8');
    cy.get('#home_club').click();
    cy.get('div.cc-tab.cc-selectable:last-child').click();
    cy.get('.cc-blank-td-row').parent().siblings().eq(19).find('.cc-reserve-button cc-selectable').click();
    cy.get('.cc-ptype').each((playerSelect, index) => {
      if (index !== 0)
        cy.wrap(playerSelect).select('LOV_PT_TBD');
    });
    // cy.get('#save_button').click();
  });
});