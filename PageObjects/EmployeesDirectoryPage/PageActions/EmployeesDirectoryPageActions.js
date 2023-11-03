const employeesDirectoryElementsLocators = require('../PageElements/EmployeesDirectoryPageElements.json')
export class EmployeeDirectoryPageActions{

    clickBButton(){
        cy.get(employeesDirectoryElementsLocators.bButton).click()
        return
    }

    assertMoreThanTwoCardsVisible(){
        let allCards = 0
        let hiddenCards = 0
        cy.get(employeesDirectoryElementsLocators.profilePhoto).then(
            cy.get(employeesDirectoryElementsLocators.hidden).then($hidden => {
                hiddenCards = $hidden.length;
              }),
            $pp => {
            allCards = $pp.length;
            cy.wrap(allCards - hiddenCards).should('be.gt', 2 )
          }
          );
        return
    }
}