import React, { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { CreateItems, AddSkipItems } from "./ItemShow";
const CreateChoiceItems = ({items, selectFunction}) => {
 useEffect(()=>{
  console.log("Create Choose Items",items);

 },[])

  return (
    <div>
      {items.map((item, parent) => {
        return (
          <React.Fragment key={parent}>
            <div className="col-md-9 col-xs-12">
              <SectionHeader heading={item.name} />
            </div>
            <div className="col-md-9 col-xs-12">
              <div className="row xs-text-center">
                {item.items.map((e, child) => (
                  <CreateItems parent={parent} child={child} element={e} selectFunction={selectFunction} key={child} />
                ))}
                <AddSkipItems extraItems={item.items} parent={parent} selectFunction={selectFunction}/>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CreateChoiceItems;
