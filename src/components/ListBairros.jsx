import { React, useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./ListBairros.css";

function ListBairros(props) {
   //useState para alterar o estado do componente após o reduce.
  const [currentData, setCurrentData] = useState([]);
  const {selectedData} = props;

  async function groupbyAcidentes() {
    var result = [{ bairro: 'TODOS OS BAIRROS'
    , qtd: 0
    , periodo_manha: 0 //05:00 - 11:59    
    , periodo_tarde: 0 //12:00 - 17:59    
    , periodo_noite: 0 //18:00 - 23:59    
    , periodo_madrugada: 0 //00:00 - 04:59
    , c_vitima: 0 //natureza_acidente
    , c_vitima_fatal: 0 //nataureza_acidente
    , tipo_alagamento: 0 //tipo
    , tipo_atropelamento: 0 //atropelamento & atropelamento pessoa
    , tipo_capotamento: 0 //tipo
    , tipo_choque: 0 //tipo
    , tipo_colisao: 0 // com ciclista & frorntal & lateral & transversal & traseira
    , tipo_queda: 0 //tipo
    , tipo_tombamento: 0 //tipo
    , tipo_outros: 0 //tipo
    , qtd_auto: 0
    , qtd_moto: 0
    , qtd_ciclom: 0
    , qtd_ciclista: 0
    , qtd_pedestre: 0
    , qtd_onibus: 0
    , qtd_caminhao: 0
    , qtd_viatura: 0
    , qtd_outros: 0
    , qtd_vitimas: 0
    , qtd_vitimasfatais: 0
    , local_longo_via: 0 //acidente_verificado
    , local_cruzamento: 0 //acidente_verificado
    , local_outros: 0 //acidente_verificado
    , tempo_bom: 0 //tempo_clima
    , tempo_chuvoso: 0 //tempo_clima
    , tempo_outros: 0 //tempo_clima
    , pista_seca: 0 //condicao_via
    , pista_molhada: 0 //condicao_via
    , pista_conservacao_perfeita: 0 //conservação_via
    , pista_conservacao_mal_cons: 0 //conservação_via
    , pista_conservacao_mal_ilum: 0 //conservação_via
  }];
    const data = props.data;
    if (data) {
      data.reduce(function (dic, acd) {
        if (!dic[acd.bairro]) {
          dic[acd.bairro] = { bairro: acd.bairro
                              , qtd: 0
                              , periodo_manha: 0 //05:00 - 11:59    
                              , periodo_tarde: 0 //12:00 - 17:59    
                              , periodo_noite: 0 //18:00 - 23:59    
                              , periodo_madrugada: 0 //00:00 - 04:59
                              , c_vitima: 0 //natureza_acidente
                              , c_vitima_fatal: 0 //nataureza_acidente
                              , tipo_alagamento: 0 //tipo
                              , tipo_atropelamento: 0 //atropelamento & atropelamento pessoa
                              , tipo_capotamento: 0 //tipo
                              , tipo_choque: 0 //tipo
                              , tipo_colisao: 0 // com ciclista & frorntal & lateral & transversal & traseira
                              , tipo_queda: 0 //tipo
                              , tipo_tombamento: 0 //tipo
                              , tipo_outros: 0 //tipo
                              , qtd_auto: 0
                              , qtd_moto: 0
                              , qtd_ciclom: 0
                              , qtd_ciclista: 0
                              , qtd_pedestre: 0
                              , qtd_onibus: 0
                              , qtd_caminhao: 0
                              , qtd_viatura: 0
                              , qtd_outros: 0
                              , qtd_vitimas: 0
                              , qtd_vitimasfatais: 0
                              , local_longo_via: 0 //acidente_verificado
                              , local_cruzamento: 0 //acidente_verificado
                              , local_outros: 0 //acidente_verificado
                              , tempo_bom: 0 //tempo_clima
                              , tempo_chuvoso: 0 //tempo_clima
                              , tempo_outros: 0 //tempo_clima
                              , pista_seca: 0 //condicao_via
                              , pista_molhada: 0 //condicao_via
                              , pista_conservacao_perfeita: 0 //conservação_via
                              , pista_conservacao_mal_cons: 0 //conservação_via
                              , pista_conservacao_mal_ilum: 0 //conservação_via
                            };
          result.push(dic[acd.bairro]);
        }
        dic[acd.bairro].qtd += 1;                                         result[0].qtd += 1;
        dic[acd.bairro].qtd_auto += parseInt(acd.auto);                   result[0].qtd_auto += parseInt(acd.auto) || 0;
        dic[acd.bairro].qtd_moto += parseInt(acd.moto);                   result[0].qtd_moto += parseInt(acd.moto) || 0;
        dic[acd.bairro].qtd_ciclom += parseInt(acd.ciclom);               result[0].qtd_ciclom += parseInt(acd.ciclom) || 0;
        dic[acd.bairro].qtd_ciclista += parseInt(acd.ciclista);           result[0].qtd_ciclista += parseInt(acd.ciclista) || 0;
        dic[acd.bairro].qtd_pedestre += parseInt(acd.pedestre);           result[0].qtd_pedestre += parseInt(acd.pedestre) || 0;
        dic[acd.bairro].qtd_onibus += parseInt(acd.onibus);               result[0].qtd_onibus += parseInt(acd.onibus) || 0;
        dic[acd.bairro].qtd_caminhao += parseInt(acd.caminhao);           result[0].qtd_caminhao += parseInt(acd.caminhao) || 0;
        dic[acd.bairro].qtd_viatura += parseInt(acd.viatura);             result[0].qtd_viatura += parseInt(acd.viatura) || 0;
        dic[acd.bairro].qtd_outros += parseInt(acd.outros);               result[0].qtd_outros += parseInt(acd.outros) || 0;
        dic[acd.bairro].qtd_vitimas += parseInt(acd.vitimas);             result[0].qtd_vitimas += parseInt(acd.vitimas) || 0;
        dic[acd.bairro].qtd_vitimasfatais += parseInt(acd.vitimasfatais); result[0].qtd_vitimasfatais += parseInt(acd.vitimasfatais) || 0;

        try {
          if     (parseInt(acd.hora.substring(0,2)) <= 4){ dic[acd.bairro].periodo_madrugada +=1; result[0].periodo_madrugada +=1 }
          else if(parseInt(acd.hora.substring(0,2)) <= 11){ dic[acd.bairro].periodo_manha += 1;   result[0].periodo_manha +=1 }
          else if(parseInt(acd.hora.substring(0,2)) <= 17){ dic[acd.bairro].periodo_tarde += 1;   result[0].periodo_tarde +=1 }
          else if(parseInt(acd.hora.substring(0,2)) <= 23){ dic[acd.bairro].periodo_noite += 1;   result[0].periodo_noite +=1 }  
        } catch (error) {
          console.warn(error)
        }

        try {
          if     (acd.natureza_acidente === "COM VÍTIMA"){ dic[acd.bairro].c_vitima += 1; result[0].c_vitima += 1 }
          else if(acd.natureza_acidente === "VÍTIMA FATAL"){dic[acd.bairro].c_vitima_fatal += 1; result[0].c_vitima_fatal += 1}
        } catch (error) {
          console.warn(error)
        }

        try {
          if     (acd.tipo === "ALAGAMENTO"){ dic[acd.bairro].tipo_alagamento += 1; result[0].tipo_alagamento += 1 }
          else if(["ATROPELAMENTO", "ATROPELAMENTO DE ANIMAL", "ATROPELAMENTO DE PESSOA"].includes(acd.tipo)){ dic[acd.bairro].tipo_atropelamento += 1; result[0].tipo_atropelamento += 1 }
          else if(acd.tipo === "CAPOTAMENTO"){ dic[acd.bairro].tipo_capotamento += 1; result[0].tipo_capotamento += 1 }
          else if(acd.tipo === "CHOQUE"){ dic[acd.bairro].tipo_choque += 1; result[0].tipo_choque += 1 }
          else if(["COLISÃO", "COLISÃO COM CICLISTA", "COLISÃO FRONTAL", "COLISÃO LATERAL", "COLISÃO TRANSVERSAL", "COLISÃO TRASEIRA"].includes(acd.tipo)){ dic[acd.bairro].tipo_colisao += 1; result[0].tipo_colisao += 1 }
          else if(acd.tipo === "QUEDA"){ dic[acd.bairro].tipo_queda += 1; result[0].tipo_queda += 1 }
          else if(acd.tipo === "TOMBAMENTO"){ dic[acd.bairro].tipo_tombamento += 1; result[0].tipo_tombamento += 1}
          else{ dic[acd.bairro].tipo_outros += 1; result[0].tipo_outros += 1 }  
        } catch (error) {
          console.warn(error)
        }

        try {
          if      (acd.acidente_verificado === "Longo da via"){ dic[acd.bairro].local_longo_via += 1; result[0].local_longo_via += 1 }
          else if (acd.acidente_verificado === "Cruzamento"){ dic[acd.bairro].local_cruzamento += 1; result[0].local_cruzamento += 1}
          else{dic[acd.bairro].local_outros += 1; result[0].local_outros = 1}  
        } catch (error) {
          console.warn(error)
        }

        try {
          if (acd.tempo_clima === "Bom"){ dic[acd.bairro].tempo_bom += 1; result[0].tempo_bom += 1}
          else if (acd.tempo_clima === "Chuvoso"){ dic[acd.bairro].tempo_chuvoso += 1; result[0].tempo_chuvoso += 1}
          else{dic[acd.bairro].tempo_outros += 1; result[0].tempo_outros += 1}  
        } catch (error) {
          console.warn(error)
        }

        try {
          if(acd.condicao_via === "Seca"){ dic[acd.bairro].pista_seca += 1; result[0].pista_seca += 1}
          else if(acd.condicao_via === "Molhada"){ dic[acd.bairro].pista_molhada += 1; result[0].pista_molhada += 1}  
        } catch (error) {
          console.warn(error)
        }
        
        try {
          if(acd.conservacao_via === "Perfeito estado"){ dic[acd.bairro].pista_conservacao_perfeita += 1; result[0].pista_conservacao_perfeita += 1}
          else if(acd.conservacao_via === "Mal conservada"){ dic[acd.bairro].pista_conservacao_mal_cons += 1; result[0].pista_conservacao_mal_cons += 1}
          else if(acd.conservacao_via === "Mal iluminada"){ dic[acd.bairro].pista_conservacao_mal_ilum += 1; result[0].pista_conservacao_mal_ilum += 1}  
        } catch (error) {
          console.warn(error)
        }
        
        
        return dic;
      }, {});

      result.sort(function (a, b) {
        return a.qtd > b.qtd ? -1 : a.qtd > b.qtd ? 1 : 0;
      });

      setCurrentData(result);
    }
  }
  // useEffect para chamar a função groupByAcidentes() quando o componente for montado
  // toda vez que as props forem alteradas, ele chama a função groupByAcidentes
  // para filtrar com o reduce.

  useEffect(() => {
    groupbyAcidentes();
    return () => {
      setCurrentData([]);
    };
  }, [props]);

  return (
    <ListGroup className="listgroup container-fluid">
       {/* STATE (currentData) sendo chamado no HTMl para poder fazer modificações no DOM */}
      {currentData.length > 0 ? (
        currentData.slice(1).map((item, index) => (
          <ListGroupItem action key={index} id="bairro" tag="button" onClick={() => selectedData(item)}>
            {`${index+1}º`} {item.bairro} - {item.qtd} ACIDENTES
          </ListGroupItem>
        ))
      ) : (
        <ListGroupItem action id="bairro" tag="button">
          Carregando...
        </ListGroupItem>
      )}
      {console.log('::::',currentData)}
    </ListGroup>
  );
}
export default ListBairros;
