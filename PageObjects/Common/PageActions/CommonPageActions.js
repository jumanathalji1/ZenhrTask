const commonElementsLocators = require('../PageElements/CommonPageElements.json')
export class commonPageActions{

    clickSideMenu(){
        cy.get(commonElementsLocators.sideMenu).click()
        return
    }

    checkSideMenuElementPageFound(mainLocator, subLocator){
        cy.get(mainLocator).click()
        cy.get(subLocator).click().then((link) => cy.request(link.prop('href')).its('status').should('not.equal', 404));
    }

    checkAllSideMenuElementsPageFound(){
        for (const [menuKey, locator] of Object.entries(commonElementsLocators.sideMenuLocators)) {
            for (const [subMenuKey, subLocator] of Object.entries(commonElementsLocators.sideMenuSubLocators[menuKey])) {
                this.clickSideMenu()
                this.checkSideMenuElementPageFound(locator, subLocator)
          }
        }
        return
    }

    clickEmployeesMenu(){
        cy.get(commonElementsLocators.sideMenuLocators["employeesMenu"]).click()
        return
    }

    clickEmployeeDirectory(){
        cy.get(commonElementsLocators.sideMenuSubLocators["employeesMenu"]["employeeDirectory"]).click() 
        return
    }

    clickRightSideMenu(){
        cy.get(commonElementsLocators.rightSideMenu).click()
        return
    }

    clickLogoutButton(){
        cy.get(commonElementsLocators.logout).click()
        return
    }

    assertLogout(){
        cy.url().should('eq', 'https://zenhr-master.staging.devops.zenhr.com/en/logout')
    }
}