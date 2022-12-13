/// <reference types="cypress" />

describe('Practicing from Automaion Practice site', () => {
  it('Practice with Popups', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // alert button
    cy.get('#alertbtn').click();
    // Confirm button
    cy.get('input[value="Confirm"]').click();

    // cy.on - trigger 'Browser Event' in the browser - 'window:alert'
    cy.on('window:alert', (str) => {
      // from Mocha framework
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });

    // 'window:confirm'
    cy.on('window:confirm', (str) => {
      // from Mocha framework
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });

    // for more info google cypres Event catalogue
  });
});
