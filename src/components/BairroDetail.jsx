import {React} from 'react';
import {Table} from 'reactstrap';
import './BairroDetail.css';

function BairroDetail({bairroAtual}) {

  var acd_cruzamento = bairroAtual && (((bairroAtual.local_cruzamento)/(bairroAtual.local_cruzamento+bairroAtual.local_longo_via+bairroAtual.local_outros)))*100
  var acd_seca = bairroAtual && ((bairroAtual.pista_seca / (bairroAtual.pista_seca + bairroAtual.pista_molhada))*100)
  var acd_tempobom = bairroAtual && ((bairroAtual.tempo_bom / (bairroAtual.tempo_bom + bairroAtual.tempo_chuvoso + bairroAtual.tempo_outros))*100)
  const propsTo = {
    pathname: `/ruas/${bairroAtual && bairroAtual.bairro}`}
  
  return ( <>
            <div className='bairroDetail'>
              <h5 className='text-center'>{bairroAtual && bairroAtual.bairro}</h5>
              <Table 
              className = 'table-sm'
              borderless
              hover
              responsive>
              <tbody>
                <tr>
                  <td>
                    Vítimas
                  </td>
                  <td >
                    {bairroAtual && (bairroAtual.c_vitima + bairroAtual.c_vitima_fatal)}
                  </td>
                </tr>
                <tr>
                  <td>
                    Acidentes em cruzamento 
                  </td>
                  <td >
                    {bairroAtual && acd_cruzamento.toFixed(1)}%
                  </td>
                </tr>
                <tr>
                  <td>
                    Acidentes em pista seca 
                  </td>
                  <td >
                    {bairroAtual && acd_seca.toFixed(1)}%
                  </td>
                </tr>
                <tr>
                  <td>
                    Acidentes em clima bom 
                  </td>
                  <td >
                  {bairroAtual && acd_tempobom.toFixed(1)}%
                  </td>
                </tr>
                <tr>
                  <td>
                    Motos envolvidas
                  </td>
                  <td >
                    {bairroAtual && bairroAtual.qtd_moto}
                  </td>
                </tr>
                <tr>
                  <td>
                    Carros envolvidos
                  </td>
                  <td >
                  {bairroAtual && bairroAtual.qtd_auto}
                  </td>
                </tr>
                <tr>
                  <td>
                    Ônibus envolvidos
                  </td>
                  <td >
                  {bairroAtual && bairroAtual.qtd_onibus}
                  </td>
                </tr>
                <tr>
                  <td>
                    Pedestres envolvidos
                  </td>
                  <td >
                  {bairroAtual && bairroAtual.qtd_pedestre}
                  </td>
                </tr>
              </tbody>
              </Table>
              {/* <Button className='button' type = "submit">
                <Link to={propsTo}><strong>Mais detalhes</strong></Link>
              </Button> */}
            </div>
    </>
  )
}

export default BairroDetail