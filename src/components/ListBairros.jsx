import { React, useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./ListBairros.css";

function ListBairros(props) {
   //useState para alterar o estado do componente após o reduce.
  const [currentData, setCurrentData] = useState([]);
  const {selectedData} = props;

  async function groupbyAcidentes() {
    var result = [];
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
                              , vitima_fatal: 0 //nataureza_acidente
                              , tipo_alagamento: 0 //tipo
                              , tipo_atropelamento: 0 //atropelamento & atropelamento pessoa
                              , tipo_capotamento: 0 //tipo
                              , tipo_choque: 0 //tipo
                              , tipo_colisao: 0 // com ciclista & frorntal & lateral & transversal & traseira
                              , tipo_engavetamento: 0 //tipo
                              , tipo_queda: 0 //tipo
                              , tipo_tombamento: 0 //tipo
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
                              , tempo_bom: 0 //tempo_clima
                              , tempo_chuvoso: 0 //tempo_clima
                              , pista_seca: 0 //condicao_via
                              , pista_molhada: 0 //condicao_via
                              , pista_perfeita: 0 //conservação_via
                              , pista_mal_cons: 0 //conservação_via
                              , pista_mal_ilum: 0 //conservação_via
                            };
          result.push(dic[acd.bairro]);
        }
        dic[acd.bairro].qtd += 1;
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
        currentData.map((item, index) => (
          <ListGroupItem action key={index} id="bairro" tag="button" onClick={() => selectedData(item)}>
            {`${index+1}º`} {item.bairro} - {item.qtd} ACIDENTES
          </ListGroupItem>
        ))
      ) : (
        <ListGroupItem action id="bairro" tag="button" onClick={() => selectedData({bairro: "nome", qtd: 12})}>
          Erro ao carregar os dados
        </ListGroupItem>
      )}
    </ListGroup>
  );
}
export default ListBairros;
