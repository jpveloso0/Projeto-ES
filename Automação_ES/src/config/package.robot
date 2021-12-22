*** Settings ***
Documentation    Arquivo de Mapeamento de Arquivos e Bibliotecas

Library    SeleniumLibrary
Library    DateTime
Library    String
Library    DebugLibrary
Library    REST

### Framework ###
Resource     hooks.robot
Variables    hooks.yaml

### Elements ###
Resource    ../auto/elements/elements_ES.robot
Resource    ../auto/keywords/kws_ES.robot

### Keyworks ###
Resource    ../utils/common.robot
