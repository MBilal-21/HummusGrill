import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useContext } from "react";
import { Appstate } from "../App";
import ToastMeal from "./ToastinMeal";
const CreateBag = ({meal, selectFunction,   resetMeal, countItems,editmealId,editIndex }) => {
  const[err, setErr] = useState(false);
  const {handleClose,setAddToCartItem, cartItems, setCartItems, subTotal,setFormattedSubTotal} = useContext(Appstate);
 
  const openAddCart = () =>{
    for (let i = 0; i < meal.ingrediants.length; i++) {
      const e = meal.ingrediants[i];
      if (e.count === 0 && e.skipAll===false) {
        
        setErr(true);
        setTimeout(()=>{setErr(false)},5000);
        return;
      }
      // setErr(false);
    }
  if (editmealId && cartItems.length) {
    let p = Number(subTotal);
    const editCartMeal = [...cartItems];
    p -= Number(editCartMeal[editIndex].price)* Number(editCartMeal[editIndex].quantity);
    p += Number(meal.price)* Number(meal.quantity);
    setFormattedSubTotal(p);
    editCartMeal[editIndex] = JSON.parse(JSON.stringify(meal));
    setCartItems(editCartMeal)
    handleClose("cart");
    return;
  }
    const c = JSON.parse(JSON.stringify(meal));
      setAddToCartItem(c);
      handleClose("");
    
  }

 
  return (
    <>
    <ToastMeal message={"Please select the mendatory meal or skip it"} showA={err} setShowA={setErr}/>
    <div className="createBag col-12">
      <div className="stick">
        <h4>
          {meal.name} 
          {/* <span>{"(Sr 2)"}</span> */}
        </h4>
        <ul>
          <li className="createBag-li">
            <span>Items</span>
            <span>{"( "+countItems+" )"}</span>
          </li>
          <li className="createBag-li">
            <span>Total Price</span>
            <span>({meal.price && "$ " + parseFloat(meal.price).toFixed(2)})</span>
          </li>
        </ul>
        <div className="d-flex gap-2">
          {" "}
        <button type="button" className="btn  dish-btn" onClick={openAddCart}>
            Add To Cart
          </button>
          <button type="button" className="btn  dish-btn" onClick={resetMeal}>
            <RestartAltIcon/> Reset
          </button>
        </div>
      </div>
      {/* show items in below div that is selected */}
      <div className="selected-item-list">
        <ul className="my-3">
          {meal.ingrediants.map((e, parent) => {
            if (e.skipAll) {
              return <React.Fragment key={e.id}>
                 <li className="my-1 w-100">
                    <div className="d-flex">
                      <img
                        src={e.image}
                        alt=""
                        width={80}
                        height={80}
                        style={{ objectFit: "fill",background:"yellow" }}
                      />
                      <div className="ms-2">
                        <div>{`Skipped  ${e.name}`}</div>
                        {/* <div>{item.price && "$ " + item.price}</div> */}
                      </div>
                    </div>

                    {/* <div
                      className="remove-item-icon"
                      onClick={() => selectFunction(parent, child, 0)}
                    >
                      <ClearIcon />{" "}
                    </div> */}
                  </li>
              </React.Fragment>
            }

            return e.items.map((item, child) => (
              <React.Fragment key={child}>
                {item.selected && (
                  <li className="my-1 w-100">
                    <div className="d-flex">
                      <img
                        src={item.image}
                        alt=""
                        width={80}
                        height={80}
                        style={{ objectFit: "fill" }}
                      />
                      <div className="ms-2">
                        <div>{item.name}</div>
                        <div>{item.price && "$ " + item.price}</div>
                      </div>
                    </div>

                    <div
                      className="remove-item-icon"
                      onClick={() => selectFunction(parent, child, 0)}
                    >
                      <ClearIcon />{" "}
                    </div>
                  </li>
                )}
                {item.addExtra && (
                  <li className="my-1 ">
                    <div className="d-flex">
                      <img
                        src={item.image}
                        alt=""
                        width={80}
                        height={80}
                        // style={{ objectFit: "fill" }}
                      />
                      <div className="ms-2">
                        <div>{"Extra " + item.name}</div>
                        <div>{item.extraPrice && "$ " + item.extraPrice}</div>
                      </div>
                    </div>

                    <div onClick={() => selectFunction(parent, child, 1)}>
                      {" "}
                      <ClearIcon className="btn-circle" />
                    </div>
                  </li>
                )}
              </React.Fragment>
            ));
          })}
        </ul>
      </div>
    </div>
    </>
  );
};

export default CreateBag;
