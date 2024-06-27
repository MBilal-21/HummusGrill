import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import ItemShow from './ItemShow';
const ItemsMap = ({items = []}) => {
  useEffect(()=>{
    console.log("item Map render");
  },[])

  return (
    <Row className='xs-text-center'>
      {items.map((item, index)=>{
        return(
          <ItemShow item={item} key={index} />
        )
      })}
    </Row>
  )
}

export default ItemsMap
