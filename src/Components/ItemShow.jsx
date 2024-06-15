import React, { useContext, useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import menu2 from "../Assets/Items/MenuItems/menuSide1.jpeg";
import { Appstate } from "../App";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

const ItemShow = ({item}) => {
  const useAppState = useContext(Appstate);
  return (
    <Col md={6} sm={6} xs={12}>
      {/* <!-- Box Start --> */}
      <div className="menu-box">
        <div className="image">
          <img
            src={menu2}
            alt="Classic Hummus with pita bread"
            className="img-fluid"
          />
        </div>
        <div className="caption">
          {/* item name */}
          <h4>{item.name}</h4>
          {/* item about */}
          <span>
           {item.about ? item.about : "No description available"}
          </span>
          {/* item price */}
          <div className="price">{item.price ? "$"+item.price : ""}</div>

          <button
            type="button"
            className="btn  dish-btn"
            onClick={() => {
              useAppState.setShowAddToCart(true);
              useAppState.setAddToCart(item);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      {/* <!-- Box End --> */}
    </Col>
  );
};

const CreateItems = () => {
  const [clickStyle, setClickStyle] = useState(false);
  const box = useRef();
  useEffect(() => {
    clickStyle
      ? box.current.classList.add("activeClickStyle")
      : box.current.classList.remove("activeClickStyle");
  }, [clickStyle]);
  // Get the items from app state to display
  return (
    <Col lg={6} sm={12} xs={12} onClick={() => setClickStyle(!clickStyle)}>
      {/* <!-- Box Start --> */}
      <div className="menu-box d-flex" ref={box} style={{ cursor: "pointer" }}>
        <div className="image" style={{flex:"0 0 140px"}}>
          <img
            src={menu2}
            alt="Classic Hummus with pita bread"
            className="img-fluid"
          />
        </div>
        <div className="caption">
          <h4>Classic Hummus with pita bread</h4>
          <span>
            Hummus is a dip or spread made from cooked mashed chickpeas and
            tahini. Our creamy hummus is made daily using fresh ingredients.
            (vegan, vegetarian, gluten-Free).Pita bread is not gluten free
          </span>
          <div className="price">$6.99</div>
        </div>
      </div>
      {/* <!-- Box End --> */}
    </Col>
  );
};

const AddSkipItems = () => {
  return (
    <Col md={6} sm={6} xs={12}>
      <div className="menu-box skipDiv">
        <div className="d-flex flex-wrap skipDiv-1">
        <div>
          <div className="skipDivBtn">
            <AddIcon className="icon" />
          </div>
          <span>Add Extra</span>
        </div>
        <div>
          <div className="skipDivBtn">
            <ClearIcon className="icon" />
          </div>
          <span>Skip All</span>
        </div>
      </div>
      </div>
    </Col>
  );
};

export default ItemShow;
export { CreateItems, AddSkipItems };
