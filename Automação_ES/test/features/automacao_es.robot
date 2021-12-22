*** Settings ***
Documentation
Resource    ../../src/config/package.robot

Test Setup       Open Session
Test Teardown    Close Session

*** Test Cases ***
Cenário: CT_001 Validar consulta de acidentes
	Dado que esteja na home page
	Quando informar as datas de referencia e clicar no botão buscar
	Então o sistema exibe lista de todos os bairros do recife

Cenário: CT_002 Validar Consulta por bairro
	Dado que esteja na home page
	Quando informar as datas de referencia e clicar no botão buscar
	E selecionar o bairro Caxangá
	Então o sistema exibe os dados de acidentes do bairro selecionado

Cenário: CT_003 Consulta data inicial maior que final
	Dado que esteja na home page
	Quando informar data inicial maior que a final 
	Então o sistema exibe mensagem de erro "Data Invalida"

Cenàrio: CT_004 Consulta data inválida
	Dado que esteja na home page
	Quando tentar inserir datas inválidas
	Então o sistema exibe mensagem de erro "Data Invalida"

Cenário: CT_008 Validar graficos de acidentes
	Dado que esteja na home page
	Quando informar as datas de referencia e clicar no botão buscar
	E selecionar o bairro Caxangá
	Então o sistema exibe graficos contendo numeros de vítmas
	E acidentes por periodo
	E veiculos envolvidos

Cenário: CT_009 Validar troca de bairro
	Dado que esteja na home page
	E informar as datas de referencia e clicar no botão buscar
	E selecionar o bairro Caxangá
	Quando selecionar outro bairro
	Então o sistema exibe os dados do novo bairro