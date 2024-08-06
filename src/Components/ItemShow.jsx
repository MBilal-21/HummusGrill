import React, { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { Appstate } from "../App";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Row from "react-bootstrap/esm/Row";
import ImageWithLoader from "./ImageWithLoader";
import AddExtraModel from "./AddExtraModel";

const ItemShow = ({ item }) => {
  const {handleClose,setAddToCartItem} = useContext(Appstate);
  
  return (
    <Col md={6} sm={6} xs={12}>
      <div className="px-2">
        <Row className="menu-box">
          <Col className="image" xs={12} sm={12} lg={4}>
             <ImageWithLoader src={`${item.image}`}  alt={item.name}/>
          </Col>
          <Col xs={12} sm={12} lg={8} className="caption">
            {/* item name */}
            <h4>{item.name ? item.name : "Item Name"}</h4>
            {/* item about */}
            <span>{item.about ? item.about : "No description available"}</span>
            {/* item price */}
            <div className="price">{item.price ? "$" + parseFloat(item.price).toFixed(2) : ""}</div>
            <button
              type="button"
              className="btn  dish-btn align-self-end"
              style={{ width: "minContent" }}
              onClick={() => {
                handleClose("");
                const I = JSON.parse(JSON.stringify(item))
                setAddToCartItem({...I});
              }}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </div>
      {/* <!-- Box End --> */}
    </Col>
  );
};
// -------------------------show items for create bag and create wrap------------------------------------------

const CreateItems = ({parent,child,element,selectFunction}) => {
  return (
    <Col lg={6} sm={12} xs={12} onClick={() =>{selectFunction(parent,child,0)}}>
      {/* <!-- Box Start --> */}
      <div className="px-2">
        <Row className={`menu-box ${element.selected && "activeClickStyle"}`}   style={{cursor:"pointer"}}>
          <Col className="image" xs={12} sm={12} lg={4}>
            <ImageWithLoader src={`${element.image}`}  alt={element.name}/>
          </Col>
          <Col xs={12} sm={12} lg={8} className="caption">
            {/* element name */}
            <h4>{element.name ? element.name : "No name available"}</h4>
            {/* element about */}
            <span>{element.about ? element.about : "No description available"}</span>
            {/* element price */}
            <div className="price">{element.price && "+$" + parseFloat(element.price).toFixed(2)}</div>
          </Col>
        </Row>
      </div>
      {/* <!-- Box End --> */}
    </Col>
  );
};

// --------------------add extra and skip button at create bowl and wrap----------------------
const AddSkipItems = ( {extraItems, parent, selectFunction, skipAll,skipState}) => {
  const [show , setShow] = useState(false)
  const handleClose = () => setShow(!show);
  return (<>
    <Col md={6} sm={12} xs={12}>
      <div className="menu-box skipDiv">
        <div className="d-flex flex-wrap skipDiv-1">
           {/* <Link to={"?model=addExtra&p="+ parent} > */}
           <div 
           onClick={ handleClose}
           >
            <div className="skipDivBtn">
              <AddIcon className="icon" />
            </div>
            <span>Add Extra</span>
          </div>
          {/* </Link>  */}
          <div>
         <div className={`skipDivBtn`} id={ `${skipState && "activeSkip"}`} onClick={()=>{ skipAll(parent)}} >
              <ClearIcon className="icon" />
            </div>
            <span>Skip All</span>
          </div>
        </div>
      </div>
    </Col>
    <AddExtraModel show={show} handleClose={handleClose}  extraItems={extraItems} parent={parent} selectFunction={selectFunction}/>
    </>
  );
};

export default ItemShow;
export { CreateItems, AddSkipItems };
