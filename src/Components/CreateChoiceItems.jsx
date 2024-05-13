import React from "react";
import SectionHeader from './SectionHeader';
import { CreateItems , AddSkipItems } from './ItemShow';
const CreateChoiceItems = () => {
  return (
    <div>
      <div className="col-md-10 col-xs-12">

      <SectionHeader heading={"Choose A Base"} />
      </div>
      <div className="col-md-10 col-xs-12">
      <div className="row xs-text-center">
        <CreateItems />
        <CreateItems />
        <CreateItems />
        <CreateItems />
        <CreateItems />
        <CreateItems />
        <CreateItems />
        <AddSkipItems />
      </div>
      </div>
      <div className="container-bg-clr intruction col-sm-8 col-xs-8 offset-md-1 offset-sm-1">
        <div className="my-2 fs-4">Special Intruction</div>
        <input type="text" placeholder="Type Here......."/>
      </div>
    </div>
  );
};

export default CreateChoiceItems;
