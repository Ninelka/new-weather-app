import React from "react";

import { ITab, ITabsProps } from "../../interfaces";
import TabButton from "./TabButton";

const Tabs: React.FC<ITabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState<number>(1);

  return (
    <div>
      <div className="flex justify-between border-b border-b-dark-primary/30 px-8 shadow-xs">
        {tabs.map((item: ITab) => {
          return (
            <>
              <TabButton
                key={item.id}
                tab={item}
                handleChangeTab={() => setActiveTab(item.id)}
                activeTab={activeTab}
              />
            </>
          );
        })}
      </div>
      <div>
        {tabs.map(({ id, content }) => {
          return <>{activeTab === id && <div>{content}</div>}</>;
        })}
      </div>
    </div>
  );
};

export default Tabs;
