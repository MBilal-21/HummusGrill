import React from "react";
import Container from "react-bootstrap/Container";
import Divider from "../Divider";
import ItemsMap from "../ItemsMap";
const OurMenu = () => {
  return (
    <Container className="ourMenu" id="ourMenu">
      <div className=" text-center">
        <hr />
        <h4>Our Menu</h4>
        <Divider />
        <p>Come and try us, we promise you will not be disappointed!</p>
      </div>


    <ItemsMap/>
   
    </Container>
  );
};

export default OurMenu;

      // <Col md={6} sm={6} xs= {12}>
      //   {/* <!-- Box Start --> */}
      //   <div className="menu-box">
      //     <div className="image">
      //       <img src={menu2} width={130} alt="Classic Hummus with pita bread" className="img-fluid"/>
      //     </div>
      //     <div className="caption">
      //       <h4>Classic Hummus with pita bread</h4>
      //       <span>
      //         Hummus is a dip or spread made from cooked mashed chickpeas and
      //         tahini. Our creamy hummus is made daily using fresh ingredients.
      //         (vegan, vegetarian, gluten-Free).Pita bread is not gluten free
      //       </span>
      //       <div className="price">$6.99</div>
      //       {/* <!----------------------add to cart popup condition implement--------------------> */}
      //       <button type="button" /* data-toggle="modal"data-target="#model_category_10" */  className="btn  dish-btn">
      //         Add To Cart
      //       </button>
      //       {/* <!----------------------add to cart popup condition implement--------------------> */}
      //     </div>
      //   </div>
      //   {/* <!-- Box End --> */}
      // </Col>


      // <div className="row xs-text-center">
      
      // <Col md={6} sm={6} xs= {12}>
      //   {/* <!-- Box Start --> */}
      //   <div className="menu-box">
      //     <div className="image">
      //       <img src={menu2} alt="Classic Hummus with pita bread" className="img-fluid"/>
      //     </div>
      //     <div className="caption">
      //       <h4>Classic Hummus with pita bread</h4>
      //       <span>
      //         Hummus is a dip or spread made from cooked mashed chickpeas and
      //         tahini. Our creamy hummus is made daily using fresh ingredients.
      //         (vegan, vegetarian, gluten-Free).Pita bread is not gluten free
      //       </span>
      //       <div className="price">$6.99</div>
      //       <button type="button" /* data-toggle="modal"data-target="#model_category_10" */  className="btn  dish-btn">
      //         Add To Cart
      //       </button>
      //     </div>
      //   </div>
      //   {/* <!-- Box End --> */}
      // </Col>
     
      // </div>