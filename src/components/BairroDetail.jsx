import {UncontrolledCollapse} from 'reactstrap'
import {React} from 'react'
import './BairroDetail.css';


function BairroDetail() {
  return (
        <UncontrolledCollapse className='bairroDetail' toggler="#bairro">
            <section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
            </section>
        </UncontrolledCollapse>
  )
}

export default BairroDetail