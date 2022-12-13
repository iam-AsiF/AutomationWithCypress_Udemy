/// <reference types="cypress" />

describe('Practicing from Automaion Practice site', () => {
  it('Practice with Checkbox', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // to check a box - should be
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');
    // with should have.value we can check the attribute's value

    // what id I want to uncheck it - use dhould not be
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    // what if I want ot check multiple checkboxes available there - need to find common attribute
    cy.get('input[type="checkbox"]')
      .check(['option2', 'option3'])
      .should('be.checked');
    // here we check the available attribute's value with common attribute and checked them
  });

  it('Practice with DropDown', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Static - it will have 'select' tag name
    cy.get('#dropdown-class-example')
      .select('option2')
      .should('have.value', 'option2');

    // Dynamic - suppose, we want to select Bangladesh from the dropdown results
    // if we want to visit from parent to child element we can use parent locator then space and the child tag name
    cy.get('#autocomplete').type('ban').wait(2000);
    cy.get('.ui-menu-item').each(($el, index, $list) => {
      const searchResult = $el.text();
      cy.log(searchResult);
      if (searchResult === 'Bangladesh') {
        cy.wrap($el).click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'Bangladesh');
    // since I dont know the dropdown text index so I need to gram all the results in a loop and
    // select the matching one, so we can use each(); with cy.log we can see search results in the testRunner
  });

  it('Practice with Visible-Invisible element', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#displayed-text').should('be.visible');

    // clicking Hide button
    cy.get('#hide-textbox').click().wait(2000);
    cy.get('#displayed-text').should('not.be.visible');

    // clicking Show button
    cy.get('#show-textbox').click().wait(2000);
    cy.get('#displayed-text').should('be.visible');
  });

  it('Practice with Radio button', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // we can use both click() ans check() for this one
    // checking all three
    cy.get('input[value="radio1"]')
      .click()
      .should('be.checked')
      .and('have.value', 'radio1');
    cy.get('input[value="radio2"]')
      .click()
      .should('be.checked')
      .and('have.value', 'radio2');
    cy.get('input[value="radio3"]')
      .click()
      .should('be.checked')
      .and('have.value', 'radio3');
  });
});
