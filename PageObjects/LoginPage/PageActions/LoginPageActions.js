const loginElementsLocators = require('../PageElements/LoginPageElements.json')
export class LoginPageActions{

    setEmail(email){
        cy.get(loginElementsLocators.loginPageLocators.emailLocator).type(email) //Set email
        return
    }

    setPassword(password){
        cy.get(loginElementsLocators.loginPageLocators.passwordLocator).type(password) //Set password
        return
    }

    clickLoginButton(){
        cy.get(loginElementsLocators.loginPageLocators.loginButtonLocator).click() //Click on login button
        return
    }

    assertLogin(){
        cy.url().should('eq', 'https://zenhr-master.staging.devops.zenhr.com/en/dashboard')
        return
    }

}