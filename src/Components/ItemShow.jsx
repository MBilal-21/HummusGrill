import React, {useContext} from 'react'
import Col from 'react-bootstrap/Col';
import menu2 from '../Assets/Items/MenuItems/menuSide1.jpeg'
import { Appstate } from '../App';

const ItemShow = () => {
  const useAppState = useContext(Appstate);
  return (
    <Col md={6} sm={6} xs= {12}>
      {/* <!-- Box Start --> */}
      <div className="menu-box">
        <div className="image">
          <img src={menu2} alt="Classic Hummus with pita bread" className="img-fluid"/>
        </div>
        <div className="caption">
          <h4>Classic Hummus with pita bread</h4>
          <span>
            Hummus is a dip or spread made from cooked mashed chickpeas and
            tahini. Our creamy hummus is made daily using fresh ingredients.
            (vegan, vegetarian, gluten-Free).Pita bread is not gluten free
          </span>
          <div className="price">$6.99</div>
          <button type="button"  className="btn  dish-btn" onClick={()=> {useAppState.setShowAddToCart(true)}}>
            Add To Cart
          </button>
        </div>
      </div>
      {/* <!-- Box End --> */}
    </Col>
  )
}

export default ItemShow
