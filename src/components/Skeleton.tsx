import React from "react";

const Skeleton = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="skeleton transform-center block h-full transition-transform"></div>
      </div>
    </div>
  );
};

export default Skeleton;
