/// <reference types="Cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import { LoginPageActions } from "../../../PageObjects/LoginPage/PageActions/LoginPageActions"
const Credintials = require("../../fixtures/creds.json")

const loginActions = new LoginPageActions

  Given('Visit ZenHR website', function(){
    cy.visit('https://zenhr-master.staging.devops.zenhr.com/en/users/sign_in')
  })

  When('User provide email', function(){
    loginActions.setEmail(Credintials.testCredintials.email)

  })

  When('User provide password', function(){
    loginActions.setPassword(Credintials.testCredintials.password)

  })

  Then('Click on Login button to log in into ZenHR website', function(){
    loginActions.clickLoginButton()

  })

  And('Assert login', function(){
    loginActions.assertLogin()

  })
