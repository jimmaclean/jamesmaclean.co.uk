import React from "react";

const SideScroller = ({ children, blockClassName }) => {
  return <div className="side-scroller">
            <div className={`side-scroller-child ${blockClassName}`}>{children}</div>
          </div>;
};

export default SideScroller;
