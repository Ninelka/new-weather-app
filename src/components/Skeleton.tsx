import classNames from "classnames";
import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "relative h-full w-full overflow-hidden rounded-xl",
        className
      )}
    >
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="skeleton transform-center block h-full transition-transform"></div>
      </div>
    </div>
  );
};

export default Skeleton;
