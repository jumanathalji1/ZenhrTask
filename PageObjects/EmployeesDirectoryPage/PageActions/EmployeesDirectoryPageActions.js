const employeesDirectoryElementsLocators = require('../PageElements/EmployeesDirectoryPageElements.json')
export class EmployeeDirectoryPageActions{

    clickBButton(){
        cy.get(employeesDirectoryElementsLocators.bButton).click()
        return
    }

}