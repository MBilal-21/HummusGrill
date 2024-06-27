import React from "react";
import SectionHeader from "./SectionHeader";
import { CreateItems, AddSkipItems } from "./ItemShow";
import { ItemList } from "../itemsList/items";
const CreateChoiceItems = () => {
  const Items = ItemList[0].createMeal[0];
  return (
    <div>
      {Items.ingrediants.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <div className="col-md-9 col-xs-12">
              <SectionHeader heading={item.name} />
            </div>
            <div className="col-md-9 col-xs-12">
              <div className="row xs-text-center">
                {item.items.map((f, index) => (
                  <CreateItems limit={item.limit} item={f} key={index} />
                ))}
                <AddSkipItems />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CreateChoiceItems;
