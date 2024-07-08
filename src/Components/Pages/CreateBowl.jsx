import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import CreateBag from "../CreateBag";
import CreateChoiceItems from "../CreateChoiceItems";
import { ItemList } from "../../itemsList/items";


const CreateBowl = () => {
  const items = ItemList[0].createMeal[0];
  const [meal, setMeal] = useState(() => {
    const savedMeal = localStorage.getItem("meal");
    return savedMeal ? JSON.parse(savedMeal) : { ...items };
  });

  useEffect(() => {
    localStorage.setItem("meal", JSON.stringify(meal));
    console.log(meal);
  }, [meal]);

  const selectFunction = (parent, child, addExtra) => {
    const newMeal = { ...meal };
    const l = newMeal.ingrediants[parent].limit;
    const f = newMeal.ingrediants[parent].items[child];
    const c = newMeal.ingrediants[parent].count;
    const p = newMeal.ingrediants[parent].items[child].price;
    const x = newMeal.ingrediants[parent].extraCount;
    const xp = newMeal.ingrediants[parent].items[child].extraPrice;

    if (addExtra) {
      if (x < l && !f.addExtra) {
        newMeal.ingrediants[parent].extraCount++;
        if (xp) {
          newMeal.price = parseFloat((newMeal.price + xp).toFixed(2));
        }
        newMeal.ingrediants[parent].items[child].addExtra = !f.addExtra;
        setMeal(newMeal);
      } else if (f.addExtra && xp > 0) {
        newMeal.ingrediants[parent].extraCount--;
        if (xp && newMeal.price > items.price) {
          newMeal.price = parseFloat((newMeal.price - xp).toFixed(2));
        }
        newMeal.ingrediants[parent].items[child].addExtra = !f.addExtra;
        setMeal(newMeal);
      }
      return;
    }

    if (c < l && !f.selected) {
      newMeal.ingrediants[parent].count++;
      if (p) {
        newMeal.price = parseFloat((newMeal.price + p).toFixed(2));
      }
      newMeal.ingrediants[parent].items[child].selected = !f.selected;
      setMeal(newMeal);
    } else if (f.selected && c > 0) {
      newMeal.ingrediants[parent].count--;
      if (p && newMeal.price > items.price) {
        newMeal.price = parseFloat((newMeal.price - p).toFixed(2));
      }
      newMeal.ingrediants[parent].items[child].selected = !f.selected;
      setMeal(newMeal);
    }
  };

  return (
    <Container className="createSection">
      <CreateChoiceItems
        items={items.ingrediants}
        selectFunction={selectFunction}
      />
      <CreateBag meal={meal} selectFunction={selectFunction} />
      <div className="container-bg-clr intruction col-sm-8 col-xs-8 offset-md-1 offset-sm-1">
        <div className="my-2 fs-4">Special Intruction</div>
        <input
          type="text"
          placeholder="Type Here......."
          name="specialInstruct"
          onChange={(e) =>
            setMeal((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            })
          }
        />
      </div>
    </Container>
  );
};

export default CreateBowl;
