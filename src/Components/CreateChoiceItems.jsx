import React from "react";
import SectionHeader from "./SectionHeader";
import { CreateItems, AddSkipItems } from "./ItemShow";
const CreateChoiceItems = ({ items, selectFunction, skipAll }) => {
 

  return (
    <div>
      {items.map((item, parent) => {
        return (
          <React.Fragment key={parent}>
            <div className="col-md-9 col-xs-12">
              <SectionHeader heading={`Choose ${item.name}`} />
              {item.count === 0 && !item.skipAll && <p className="text-danger">
                Choose at least one item or Skip All
              </p>}
            </div>
            <div className="col-md-9 col-xs-12">
              <div className="row xs-text-center">
                {item.items.map((e, child) => (
                  <CreateItems
                    parent={parent}
                    child={child}
                    element={e}
                    selectFunction={selectFunction}
                    key={child}
                  />
                ))}
                <AddSkipItems
                  extraItems={item.items}
                  parent={parent}
                  selectFunction={selectFunction}
                  skipAll={skipAll}
                  skipState = {item.skipAll}
                />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CreateChoiceItems;
