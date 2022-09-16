
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site Carrefour", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

And("coloco e-mail e senha", () => {
    loginPage.preencherCampoEmail();
    loginPage.clicarParaContinuar();
    loginPage.preencherEspacoSenha();
    loginPage.clicarParaContinuar();
})

Then("devo executar um login com sucesso", () => {
    // loginPage.entrarNaPagina();
})