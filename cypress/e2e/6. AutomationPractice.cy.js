/// <reference types="cypress" />

describe('Practicing from Automaion Practice site', () => {
  it('Practice with Web Table Course-Price', () => {
    // suppose we want to test if the price in the table for Selenium-Python is $25, or not
    //  we just cannot make default CSS for that position since it will be some other position in future

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('.table-display')
      .get('tr td:nth-child(2)')
      .each(($el, index, $list) => {
        const cournseName = $el.text();
        if (
          cournseName === 'Master Selenium Automation in simple Python Language'
        ) {
          cy.log(cournseName);
          /*
            here, we cannot use parent-child to grab price text since it is child-child td
            so, we can use next() to grab immediate child, but we only can use it after cy.get() only.
            
            And now we have to use 'index' from each() box to grab the exact child index so tha we can trace
            the index value and put it inside the eq() as it grabs the index elemenmt.
            
            since we cannot use text() with cypress command as it is a jQuery promise, we need to use
            then(functuon() { }); and grab teh parameter's text value. expect and equal to campare expecetd-actual value.
            */

          cy.get('tr td:nth-child(2)')
            .eq(index)
            .next()
            .then(function (price) {
              const priceText = price.text();
              cy.log(priceText);
              expect(priceText).to.equal('25');
            });
        }
      });
  });

  it('Practice with Web Table Position-City', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Suppose, we want to test if Position for Engineer is available in Cities Chennai and Pune
    cy.get('.tableFixHead')
      .get('tr td:nth-child(2)')
      .each(($el, index, $list) => {
        const positionText = $el.text();

        if (positionText === 'Engineer') {
          cy.log(positionText);

          cy.get('tr td:nth-child(2)')
            .eq(index)
            .next()
            .then(function (city) {
              const cityText = city.text();

              cy.log(cityText);

              // using chai assertion .deep.equal()
              expect({ cityText: ['Chennai', 'Pune'] }).to.deep.eql({
                cityText: ['Chennai', 'Pune'],
              });
            });
        }
      });
  });
});
