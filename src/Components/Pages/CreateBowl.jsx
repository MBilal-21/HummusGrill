import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import CreateBag from "../CreateBag";
import CreateChoiceItems from "../CreateChoiceItems";
import { ItemList } from "../../itemsList/items";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Loading from "../Loading";

const CreateBowl = () => {
  const [loading, setLoading] = useState(true);
  const [countItems, setCountItems] = useState(0);
  const changeMeal = useLocation().state;
  const s = useLocation();
  const [meal, setMeal] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [editmealId, setEditMealId] = useState(null);
  const { index } = useParams();

  useEffect(() => {
   
    
    let a;
  
    if (changeMeal) {
      setEditMealId(searchParams.get("editmeal") || null);
      let c = 0;
      changeMeal.ingrediants.forEach((e) => {
        c += e.count;
        c += e.extraCount;
      });
      setCountItems(c);
      a = JSON.parse(JSON.stringify(changeMeal));
    } else {
      a = JSON.parse(JSON.stringify(ItemList[0].createMeal[index]));
      setCountItems(0);
    }
    setMeal(a);
    setLoading(false);
  }, [s]);

  const resetMeal = () => {
    let newMeal = { ...meal };
    newMeal.price = newMeal.basePrice;
    newMeal.quantity = 1;
    newMeal.specialInstruct = "";
    newMeal.ingrediants.forEach((ingredient) => {
      ingredient.count = 0;
      ingredient.extraCount = 0;
      ingredient.skipAll = false;
      ingredient.items.forEach((item) => {
        item.addExtra = false;
        item.selected = false;
      });
    });

    setMeal(newMeal);
    setCountItems(0);
  };

  const selectFunction = (parent, child, addExtra) => {
    const newMeal = { ...meal };
    const l = newMeal.ingrediants[parent].limit;
    const f = newMeal.ingrediants[parent].items[child];
    const c = newMeal.ingrediants[parent].count;
    const p = newMeal.ingrediants[parent].items[child].price;
    const x = newMeal.ingrediants[parent].extraCount;
    const xp = newMeal.ingrediants[parent].items[child].extraPrice;

    if (addExtra) {
      newMeal.ingrediants[parent].skipAll = false;
      if (x < l && !f.addExtra) {
        newMeal.ingrediants[parent].extraCount++;
        setCountItems((prev) => prev + 1);
        if (xp) {
          newMeal.price = parseFloat((newMeal.price + xp).toFixed(2));
        }
        newMeal.ingrediants[parent].items[child].addExtra = !f.addExtra;
        setMeal(newMeal);
      } else if (f.addExtra && xp > 0) {
        newMeal.ingrediants[parent].extraCount--;
        setCountItems((prev) => prev - 1);
        if (xp && newMeal.price > newMeal.basePrice) {
          newMeal.price = parseFloat((newMeal.price - xp).toFixed(2));
        }
        newMeal.ingrediants[parent].items[child].addExtra = !f.addExtra;
        setMeal(newMeal);
      }
      return;
    }

    if (c < l && !f.selected) {
      newMeal.ingrediants[parent].skipAll = false;
      newMeal.ingrediants[parent].count++;
      setCountItems((prev) => prev + 1);
      if (p) {
        newMeal.price = parseFloat((newMeal.price + p).toFixed(2));
      }
      newMeal.ingrediants[parent].items[child].selected = !f.selected;
      setMeal(newMeal);
    } else if (f.selected && c > 0) {
      newMeal.ingrediants[parent].skipAll = false;
      newMeal.ingrediants[parent].count--;
      setCountItems((prev) => prev - 1);
      if (p && newMeal.price > newMeal.basePrice) {
        newMeal.price = parseFloat((newMeal.price - p).toFixed(2));
      }
      newMeal.ingrediants[parent].items[child].selected = !f.selected;
      setMeal(newMeal);
    }
  };

  const SkipAll = (parent) => {
    let newMeal = { ...meal };
    newMeal.ingrediants[parent].count = 0;
    newMeal.ingrediants[parent].extraCount = 0;
    newMeal.ingrediants[parent].skipAll = true;
    newMeal.ingrediants[parent].items.forEach((item) => {
      if (item.addExtra) {
        item.addExtra = false;
        newMeal.price -= Number(item.extraPrice);
        newMeal.extraCount--;
        setCountItems((prev) => prev - 1);
      }
      if (item.selected) {
        item.selected = false;
        newMeal.price -= Number(item.price);
        newMeal.count--;
        setCountItems((prev) => prev - 1);
      }
    });
    setMeal(newMeal);
  };
  return (
    <Container className="createSection">
      {loading ? (
        <Loading/>
      ) : (
        <>
          <CreateChoiceItems
            items={meal.ingrediants}
            selectFunction={selectFunction}
            skipAll={SkipAll}
          />
          <CreateBag
            meal={meal}
            selectFunction={selectFunction}
            resetMeal={resetMeal}
            countItems={countItems}
            editmealId = {editmealId}
            editIndex = {searchParams.get("i")}
          />
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
        </>
      )}
    </Container>
  );
};

export default CreateBowl;
