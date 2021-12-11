import {React} from 'react';
import Chart from "react-google-charts";
import './BairroDetail.css';

function BairroDetail({bairroAtual}) {
  const vitimasdata = () => {
    var totalv = bairroAtual && bairroAtual.c_vitima;
    var totalvf = bairroAtual && bairroAtual.c_vitima_fatal;
    var totalsv = bairroAtual && bairroAtual.qtd - totalv;
    return [['Vítimas', '%'],
    ['Vítimas', bairroAtual && totalv],
    ['Vítimas fatais', bairroAtual && totalvf],
    ['Sem vítimas', bairroAtual && totalsv]]
  }

  const veiculosdata = () => {
  return [['Veículos envolvidos', 'Quantidade'],
  ['Automóvel', bairroAtual && bairroAtual.qtd_auto],
  ['Moto', bairroAtual && bairroAtual.qtd_moto],
  ['Caminhão', bairroAtual && bairroAtual.qtd_caminhao],
  ['Ciclista', bairroAtual && bairroAtual.qtd_ciclista],
  ['Pedestre', bairroAtual && bairroAtual.qtd_pedestre],
  ['Ônibus', bairroAtual && bairroAtual.qtd_onibus],
  ['Ciclomotor', bairroAtual && bairroAtual.qtd_ciclom]]
  }
  
  return ( <>
            {/* <div className='bairroDetail'>
                <p> 
                {bairroAtual && bairroAtual.bairro}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                </p>
            </div> */}
            <h5 className='text-center'>{bairroAtual && bairroAtual.bairro}</h5>
            <charts>
            <Chart
              width={'400px'}
              height={'250px'}
              chartType="PieChart"
              loader={<div>Aguarde...</div>}
              data={vitimasdata()}
              options={{
                title: bairroAtual && 'Vítimas',
              }}
              rootProps={{ 'data-testid': '1' }}
            />

            <Chart
              width={'400px'}
              height={'250px'}
              chartType="PieChart"
              loader={<div>Aguarde...</div>}
              data={veiculosdata()}
              options={{
                title: bairroAtual && 'Veículos',
              }}
              rootProps={{ 'data-testid': '1' }}
            />

            {/* <Chart
              width={'500px'}
              height={'300px'}
              chartType="BarChart"
              loader={<div>Aguarde...</div>}
              data={columndata()}
              options={{
                // Material design options
                chart: {
                  title: 'Veículos envolvidos',
                  subtitle: '',
                },
              }}
              // For tests
              rootProps={{ 'data-testid': '2' }}
            /> */}
        </charts>
    </>
  )
}

export default BairroDetail