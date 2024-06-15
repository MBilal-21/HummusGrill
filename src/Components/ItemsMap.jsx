import React from 'react'
import Row from 'react-bootstrap/Row';
import ItemShow from './ItemShow';
import { ItemList } from "../itemsList/items";
const ItemsMap = () => {
  return (
    <Row className='xs-text-center'>
      {ItemList.map((item, index)=>{
        return(
          <ItemShow item={item} key={index} />
        )
      })}
        {/* <ItemShow/>
        <ItemShow/>
        <ItemShow/>
        <ItemShow/>
        <ItemShow/> */}
    </Row>
  )
}

export default ItemsMap
