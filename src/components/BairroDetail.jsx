import {UncontrolledCollapse} from 'reactstrap'
import {React} from 'react'
import './BairroDetail.css';


function BairroDetail({bairroAtual}) {
  const calcularEstatistica = () => {
    
  }
  return (
        <UncontrolledCollapse className='bairroDetail' toggler="#bairro">
            <section>
              {bairroAtual && bairroAtual.bairro}
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.</p>
            </section>
        </UncontrolledCollapse>
  )
}

export default BairroDetail