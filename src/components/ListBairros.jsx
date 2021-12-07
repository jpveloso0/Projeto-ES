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
          dic[acd.bairro] = { bairro: acd.bairro, qtd: 0 };
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
            {item.bairro} - {item.qtd} ACIDENTES
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
