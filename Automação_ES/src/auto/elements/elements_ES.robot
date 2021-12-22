*** Settings ***
Documentation    Elementos Page ES

*** Variables ***
${logo_inicial}          //*[@Class="logo_home"]
${btn_buscar}            //*[@Class="button btn btn-secondary"]
${lista_bairros}         //*[@Class="listgroup container-fluid list-group"]
${caxanga}               //button[contains(.,'5º CAXANGÁ - 8 ACIDENTES')]
${dados_bairro}          //*[@class="bairroDetail"]
${vitmas}                //*[@id="reactgooglegraph-1"] 
${periodo}               //*[@id="reactgooglegraph-2"] 
${veiculos}              //*[@id="reactgooglegraph-3"]
${campo_grande}          //button[contains(.,'15º CAMPO GRANDE - 5 ACIDENTES')]
${campo_data_inicial}    //input[@id="de"]
${campo_data_final}      //input[@id="ate"]
${data_invalida}         //button[contains(.,'Data inválida')]