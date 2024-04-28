// import React from "react";
import Drawer from "../Drawer";

const Help = (props) => {
  const { helpHeading = "Help and FAQs", helpTitle, items, className } = props;
  return (
    <div className={className}>
      <Drawer helpHeading={helpHeading} helpTitle={helpTitle} items={items} />
    </div>
  );
};

export default Help;
