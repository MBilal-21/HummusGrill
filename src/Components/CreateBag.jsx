import React from 'react'
import menu2 from "../Assets/Items/MenuItems/menuSide1.jpeg";

const CreateBag = () => {
  return (
    <div className='createBag'>
        <div>
          <h4>Create A Bowl   <span>{"(Sr 2)"}</span></h4>
          <ul>
            <li className='createBag-li'>
              <span>Items</span>
              <span>{"(0)"}</span>
            </li>
            <li  className='createBag-li'>
              <span>Total Price</span>
              <span>{"$15.5"}</span>
            </li>
          </ul>
          <button type="button"  className="btn  dish-btn">
            Add To Cart
          </button>
        </div>
        {/* show items in below div that is selected */}
        <div>
            <ul className='my-3'>
              <li className='my-1 w-100'>
                <img src={menu2} alt="" width={80} height={80} style={{objectFit:"fill"}}/>
                <span>Item name</span>
              </li>
              <li className='my-1 w-100'>
                <img src={menu2} alt="" width={80} height={80} style={{objectFit:"fill"}}/>
                <span>Item name</span>
              </li>
            </ul>
        </div>
      </div>
  )
}

export default CreateBag
