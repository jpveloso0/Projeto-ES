*** Settings ***
Documentation    Keywords ES

*** Keywords ***
Quando informar as datas de referencia e clicar no botão buscar
    Input Text      ${campo_data_inicial}    01012021
    Input Text      ${campo_data_final}      01122021
    Click button    ${btn_buscar} 

Então o sistema exibe lista de todos os bairros do recife
    Wait Until Element Is Visible    ${lista_bairros} 

E selecionar o bairro Caxangá
    Wait Until Element Is Visible    ${caxanga}
    Click button                     ${caxanga}

Então o sistema exibe os dados de acidentes do bairro selecionado
    Wait Until Element Is Visible    ${dados_bairro} 

Quando informar data inicial maior que a final
    Input Text    ${campo_data_inicial}    01122021
    Input Text    ${campo_data_final}      01012021

E clicar no botão buscar
    Click button    ${btn_buscar} 

Quando tentar inserir datas inválidas
    Input Text    ${campo_data_inicial}    3213323333

Então o sistema exibe mensagem de erro "Data Invalida"
    Wait Until Element Is Visible    ${data_invalida}

Então o sistema exibe graficos contendo numeros de vítmas
    Wait Until Element Is Visible    ${dados_bairro}
    Wait Until Element Is Visible    ${vitmas}

E acidentes por periodo
    Wait Until Element Is Visible    ${periodo}

E veiculos envolvidos
    Wait Until Element Is Visible    ${veiculos} 

E informar as datas de referencia e clicar no botão buscar
    Click button    ${btn_buscar} 

Quando selecionar outro bairro
    Wait Until Element Is Visible    ${campo_grande}
    Click button                     ${campo_grande}

Então o sistema exibe os dados do novo bairro
    Wait Until Element Is Visible    ${dados_bairro}
