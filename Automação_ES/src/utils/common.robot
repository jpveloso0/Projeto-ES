*** Settings ***
Documentation    Keywords Comuns para uso em geral

*** Keywords ***
Dado que esteja na home page
    Wait Until Element Is Visible       ${logo_inicial}
    