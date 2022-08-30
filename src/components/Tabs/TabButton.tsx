import classNames from "classnames";
import React from "react";

import { ITabButton } from "../../interfaces";

const TabButton: React.FC<ITabButton> = ({
  tab,
  handleChangeTab,
  activeTab,
}) => {
  return (
    <button
      className={classNames(
        "relative w-full truncate text-subheadline text-dark-secondary",
        {
          "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-dark-secondary":
            tab.id === activeTab,
        }
      )}
      onClick={() => handleChangeTab(tab.title)}
    >
      {tab.title}
    </button>
  );
};

export default TabButton;
