/// <reference types="cypress"/>


//Test suit
//Launch Amazon and search for shos
describe('Amazon search Test', ()=> {

    //Test Case - Launch Amazon Us webpage
        it('Launch Amazon US', ()=> {
            cy.visit('https://www.amazon.com')
            cy.wait(8000)
          //  cy.get('Title to be').should('have.text', 'amazon')

        })

        //Test case - Search for shoes
        it('Search for shoes', function(){
            cy.get('#twotabsearchtextbox').type('shoes')
            cy.wait(2000)   
            cy.get(':nth-child(3) > .s-suggestion-container > .s-suggestion').click()
            cy.wait(5000)

        })

        //Test case - Verify that page loads successfully
        it('Verify that page loads successfully', function(){
            cy.get('#nav-cart-count-container > span.nav-cart-icon.nav-sprite')
            .should('be.visible')

        })

        //Select a shoe
        it('Select a shoe', function(){
            cy.scrollTo('0, 600')
            cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(17) > div > div > div > div > div.s-product-image-container.aok-relative.s-image-overlay-grey.s-text-center.s-padding-left-small.s-padding-right-small.s-spacing-small.s-height-equalized > span > a > div > img')
            .click()
        })

        //Verify selection of the item
        it('Verify Selection', function(){
            cy.get('#sizeChartV2Data_feature_div > span > a > span').should('be.visible')
        })
    }) 