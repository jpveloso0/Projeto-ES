import {React} from 'react';
import Chart from "react-google-charts";
import {Spinner} from 'reactstrap';
import './Charts.css';


function Charts({bairroAtual}){
    const vitimasdata = () => {
        var totalv = bairroAtual && bairroAtual.c_vitima;
        var totalvf = bairroAtual && bairroAtual.c_vitima_fatal;
        var totalsv = bairroAtual && bairroAtual.qtd - totalv;
        return [['Vítimas', '%'],
        ['Sem vítimas', bairroAtual && totalsv],
        ['Vítimas fatais', bairroAtual && totalvf],
        ['Vítimas', bairroAtual && totalv],
        ]
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

    var piewidth = 400;
    var pieheight = 225;
    var barwidth = 450;
    var barheight = 200;
    
      return (
        <div className = 'charts'>
        <Chart
          chartType="PieChart"
          loader={<Spinner>Aguarde...</Spinner>}
          data={vitimasdata()}
          options={{
            title: bairroAtual && 'Vítimas',
            width: piewidth,
            height: pieheight,
          }}
          rootProps={{ 'data-testid': '1' }}
        />

        <Chart
          chartType="BarChart"
          loader={<Spinner>Aguarde...</Spinner>}
          data={[
            [
              'Element',
              'Acidentes',
              { role: 'style' },
              {
                sourceColumn: 0,
                role: 'annotation',
                type: 'string',
                calc: 'stringify',
              },
            ],
            ['Manhã', bairroAtual && bairroAtual.periodo_manha, '#7FB3D5', null],
            ['Tarde', bairroAtual && bairroAtual.periodo_tarde, '#2980B9', null],
            ['Noite', bairroAtual && bairroAtual.periodo_noite, '#154360', null],
            ['Madrugada', bairroAtual && bairroAtual.periodo_madrugada, '#17202A', null],
          ]}
          options={{
            title: bairroAtual && 'Acidentes por período do dia',
            width: barwidth,
            height: barheight,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
          }}
          // For tests
          rootProps={{ 'data-testid': '6' }}
        />

        <Chart
          chartType="PieChart"
          loader={<Spinner>Aguarde...</Spinner>}
          data={veiculosdata()}
          options={{
            title: bairroAtual && 'Veículos',
            width: piewidth,
            height: pieheight,
          }}
          rootProps={{ 'data-testid': '1' }}
        />

    </div>
      )
}

export default Charts