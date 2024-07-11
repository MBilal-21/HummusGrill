import React, { memo } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const CreateBag = ({meal, selectFunction,   resetMeal, countItems }) => {
  return (
    <div className="createBag col-12">
      <div className="stick">
        <h4>
          Create A Bowl <span>{"(Sr 2)"}</span>
        </h4>
        <ul>
          <li className="createBag-li">
            <span>Items</span>
            <span>{"( "+countItems+" )"}</span>
          </li>
          <li className="createBag-li">
            <span>Total Price</span>
            <span>({meal.price && "$ " + meal.price})</span>
          </li>
        </ul>
        <div className="d-flex gap-2">
          {" "}
          <button type="button" className="btn  dish-btn">
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
  );
};

export default memo(CreateBag);
