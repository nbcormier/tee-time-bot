describe('Natty Boyz Saturday Tee Times', () => {
  it('Should book the 1st and 2nd tee times', function() {
    cy.visit('https://apps.invitedclubs.com/portal/pls/portal/!CCTTWEB.controller?ID=84c3c5f5fb53af90045241ec7cee8364');
    cy.get('#home_club').click();
    cy.get('div.cc-tab.cc-selectable:last-child').click();
    cy.get('.cc-blank-td-row').parent().siblings().eq(0).find('.cc-multigrab-action.cc-selectable').click();
    cy.get('.cc-ptype').each((playerSelect, index) => {
      if (index !== 0)
        cy.wrap(playerSelect).select('LOV_PT_TBD');
    });
    // cy.get('#save_button').click();
  });

  it('Should book the 3rd and 4th tee times', function() {
    cy.visit('https://apps.invitedclubs.com/portal/pls/portal/!CCTTWEB.controller?ID=b6438ad2b25c7677493424362be7c57e');
    cy.get('#home_club').click();
    cy.get('div.cc-tab.cc-selectable:last-child').click();
    cy.get('.cc-blank-td-row').parent().siblings().eq(2).find('.cc-multigrab-action.cc-selectable').click();
    cy.get('.cc-ptype').each((playerSelect, index) => {
      if (index !== 0)
        cy.wrap(playerSelect).select('LOV_PT_TBD');
    });
    // cy.get('#save_button').click();
  });

  it('Should book the 5th tee time', function() {
    cy.visit('https://apps.invitedclubs.com/portal/pls/portal/!CCTTWEB.controller?ID=8124aa9e7003645953dea353eaea32c8');
    cy.get('#home_club').click();
    cy.get('div.cc-tab.cc-selectable:last-child').click();
    cy.get('.cc-blank-td-row').parent().siblings().eq(4).find('.cc-reserve-button cc-selectable').click();
    cy.get('.cc-ptype').each((playerSelect, index) => {
      if (index !== 0)
        cy.wrap(playerSelect).select('LOV_PT_TBD');
    });
    // cy.get('#save_button').click();
  });
});