import { ComponentMeta, ComponentStory } from "@storybook/react";

import Tabs from "../components/Tabs/Tabs";

const tabs = [
  {
    id: 1,
    title: "Tab 1",
    content: <p className="text-center text-solid-4">Tab 1 content</p>,
  },
  {
    id: 2,
    title: "Tab 2",
    content: <p className="text-center text-solid-4">Tab 2 content</p>,
  },
  {
    id: 3,
    title: "Tab 3",
    content: <p className="text-center text-solid-4">Tab 3 content</p>,
  },
];

const defaultStoryParams = {
  backgrounds: {
    default: "solid1",
    values: [
      { name: "solid1", value: "#48319D" },
      { name: "solid2", value: "#1F1D47" },
    ],
  },
};

export default {
  title: "Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <div className="w-1/2">
      <Tabs {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  tabs,
};
Default.parameters = { ...defaultStoryParams };
