import React from "react";
import menu2 from "../Assets/Items/MenuItems/menuSide1.jpeg";
import ClearIcon from "@mui/icons-material/Clear";

const CreateBag = () => {
  return (
    <div className="createBag col-12">
      <div className="stick">
        <h4>
          Create A Bowl <span>{"(Sr 2)"}</span>
        </h4>
        <ul>
          <li className="createBag-li">
            <span>Items</span>
            <span>{"(0)"}</span>
          </li>
          <li className="createBag-li">
            <span>Total Price</span>
            <span>{"$15.5"}</span>
          </li>
        </ul>
        <button type="button" className="btn  dish-btn">
          Add To Cart
        </button>
      </div>
      {/* show items in below div that is selected */}
      <div className="selected-item-list">
        <ul className="my-3">
          <li className="my-1 w-100">
            <div className="d-flex">
              <img
                src={menu2}
                alt=""
                width={80}
                height={80}
                style={{ objectFit: "fill" }}
              />
              <div className="ms-2">
                <div>Item name</div>
                <div>price</div>
              </div>
            </div>
            <ClearIcon className="remove-item-icon"/>
          </li>
          <li className="my-1 w-100">
          
              <div className="d-flex">
              <img
                src={menu2}
                alt=""
                width={80}
                height={80}
                style={{ objectFit: "fill" }}
              />
              <div className="ms-2">
                <div>Item name</div>
                <div>price</div>
              </div>
              </div>
            
            <ClearIcon className="remove-item-icon"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateBag;
