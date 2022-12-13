/// <reference types="cypress" />

describe('Navigating a url', () => {
  it('Opening practice website GreenKart from rahul shetty', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    cy.get('.search-keyword').type('ca').click().wait(2000);
    // selenium get hits an url, cypress get finds and element

    cy.get('.product:visible').should('have.length', 4);
    // we want to see only visible elements and ignore invisible items
    // parent child chaining
    cy.get('.products').find('.product').should('have.length', 4);

    // Wen want to select capsicum and add it in the cart
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    // else, we can use direct commend by cypress
    // cy.get(':nth-child(3) > .product-action > button')
    // but this will break if the page updates with more products and some gets disabled
    // so, it is good to trace every element manually step by step to build a good basic

    // we want to get all the items text and if its matches 'Cashews' then we want to click it
    // we used "includes('')" to find matching text since vegName got -1Kg with the text
    cy.get('.products')
      .find('.product')
      .each(($el, index, $list) => {
        const vegName = $el.find('.product-name').text();
        if (vegName.includes('Cashews')) {
          // now we need to 'wrap()' the element becasue its a promise? - asynchronous operation
          cy.wrap($el).contains('ADD TO CART').click();
        }
      });

    /* Learned so far - 
    how to iterates through products, parants-child chaining when we have
    multiple objects inside an Element, how to grab text of an Element,  how to click, how to 
    switch to an index Element, how to type text in the input box
    */

    // to assert if logo text is correctly displayed
    cy.get('.brand.greenLogo').should('have.text', 'GREENKART');

    // suppose we want to print the GreenCart logo text inside testRunner log
    cy.get('.brand.greenLogo').then(function (logoName) {
      cy.log(logoName.text());
    });
  });
});
