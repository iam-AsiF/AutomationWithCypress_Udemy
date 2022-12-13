/// <reference types="cypress" />

describe('Practicing from Automaion Practice site', () => {
  it('Practice with Parent-Child Tab', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    /*
    if the element having 'target' attribute, it will open it on a new tab.
    but we can work with new tab if the link opens in the same window.
    so, we need to manipulate DOM to open new tab's link on the same window to work continuously
    and, we need to remove the 'Target' attribute from the element -- with 'invoke' command
    Here, invoke -- jQuery method to remove attribute
    review - 1. https://www.w3schools.com/tags/att_a_target.asp
                2. https://www.w3schools.com/jquery/html_removeattr.asp
    */

    cy.get('#opentab').invoke('removeAttr', 'target').click().wait(3000);

    // grab the new url and assert -- 'include' to assert sub-string
    cy.url().should('include', 'rahulshettyacademy');

    // Browser navigation
    cy.go('back').wait(3000);
    cy.go('forward');
  });
});
