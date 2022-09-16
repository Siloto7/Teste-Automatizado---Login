
Feature: Login site Carrefour

    Scenario: Fazer Login 
        Given acesso o site Carrefour
        When acesso a pagina de login
        And coloco e-mail e senha
        Then devo executar um login com sucesso