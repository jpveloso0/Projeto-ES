import {React} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './ListBairros.css';

function ListBairros (props){
   var res = [];
   const data = props.data;
   data.then(resolve => {resolve.forEach((i) =>{res.push(i)})})
   console.log(res)
   return (
      <ListGroup className = 'listgroup container-fluid'>
         { 
            res.lenght > 0 ? (
               res.map((item, index) => (
                  <ListGroupItem action key = {index} id='bairro' tag='button'>{item.bairro} - {item.qtd} ACIDENTES</ListGroupItem>
            )) 
            ) : (
               <ListGroupItem action id='bairro' tag='button'>Erro ao carregar os dados</ListGroupItem>
            )
         }
      </ListGroup>
   )
}
export default ListBairros