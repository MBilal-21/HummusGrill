import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Divider from "../Divider";
import { Link, useLocation } from "react-router-dom";
import ItemsMap from "../ItemsMap";
import { ItemList } from "../../itemsList/items";

const OurMenu = () => {
  const MenuItems = ItemList[0].Menu;
  const [NewItems, setNewItems] = useState(MenuItems);
  const m1 = useRef();
  const m2 = useRef();
  const m3 = useRef();
  const m4 = useRef();
  const searchMenu = (sm) => {
    let newItemList = [];
    MenuItems.forEach((element) => {
      if (element.category === sm) newItemList.push(element);
    });
    setNewItems(newItemList);
  };
  const menuSearch = useLocation().search;
  useEffect(() => {
    console.log("our menu");
    const ms = menuSearch.split("=")[1];
    m1.current.classList.add("c-w_Bg-Y");
    m2.current.classList.add("c-w_Bg-Y");
    m3.current.classList.add("c-w_Bg-Y");
    m4.current.classList.add("c-w_Bg-Y");
    switch (ms) {
      case "side": {
        searchMenu("side");
        m1.current.classList.add("c-Y_Bg-w");
        m1.current.classList.remove("c-w_Bg-Y");
        m2.current.classList.remove("c-Y_Bg-w");
        m3.current.classList.remove("c-Y_Bg-w");
        m4.current.classList.remove("c-Y_Bg-w");
        break;
      }
      case "deserts": {
        searchMenu("deserts");
        m4.current.classList.add("c-Y_Bg-w");
        m4.current.classList.remove("c-w_Bg-Y");
        m1.current.classList.remove("c-Y_Bg-w");
        m3.current.classList.remove("c-Y_Bg-w");
        m2.current.classList.remove("c-Y_Bg-w");
        break;
      }
      case "kidsMenu": {
        searchMenu("kidsMenu");
        m2.current.classList.add("c-Y_Bg-w");
        m2.current.classList.remove("c-w_Bg-Y");
        m1.current.classList.remove("c-Y_Bg-w");
        m3.current.classList.remove("c-Y_Bg-w");
        m4.current.classList.remove("c-Y_Bg-w");
        break;
      }
      case "drinks": {
        searchMenu("drinks");
        m3.current.classList.add("c-Y_Bg-w");
        m3.current.classList.remove("c-w_Bg-Y");
        m1.current.classList.remove("c-Y_Bg-w");
        m2.current.classList.remove("c-Y_Bg-w");
        m4.current.classList.remove("c-Y_Bg-w");
        break;
      }

      default: {
        searchMenu("side");
        m1.current.classList.add("c-Y_Bg-w");
        m1.current.classList.remove("c-w_Bg-Y");
        m2.current.classList.remove("c-Y_Bg-w");
        m3.current.classList.remove("c-Y_Bg-w");
        m4.current.classList.remove("c-Y_Bg-w");
        break;
      }
    }
  }, [menuSearch]);

  return (
    <Container className="ourMenu" id="ourMenu">
      <div className=" text-center">
        <hr className="theline" />
        <h4>Our Menu</h4>
        <Divider />
        <p>Come and try us, we promise you will not be disappointed!</p>
      </div>
      <div className="text-center m-4">
        <Link to={"/menu/?search=side"} className="m-2 btn c-w_Bg-Y" ref={m1}>
          SIDE
        </Link>
        <Link
          to={"/menu/?search=kidsMenu"}
          className="m-2 btn c-w_Bg-Y"
          ref={m2}
        >
          KIDS MENU
        </Link>
        <Link to={"/menu/?search=drinks"} className="m-2 btn c-w_Bg-Y" ref={m3}>
          DRINKS
        </Link>
        <Link
          to={"/menu/?search=deserts"}
          className="m-2 btn c-w_Bg-Y"
          ref={m4}
        >
          DESERTS
        </Link>
      </div>
      <ItemsMap items={NewItems} />
    </Container>
  );
};

export default OurMenu;
