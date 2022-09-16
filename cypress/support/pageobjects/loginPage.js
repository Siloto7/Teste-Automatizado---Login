
/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements()

class LoginPage {
    acessarSite() {
        cy.visit(Cypress.config("baseUrl"))
    }

    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    preencherCampoEmail() {
        cy.get(loginElements.inputEmail()).type(Cypress.config("email"))
    }

    preencherEspacoSenha() {
        cy.get(loginElements.inputSenha()).type(Cypress.config("senha"))
    }

    clicarParaContinuar() {
        cy.get(loginElements.botaoContinuar()).click()
    }
}

export default LoginPage;