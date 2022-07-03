import { ComponentMeta, ComponentStory } from "@storybook/react";

import Input from "../components/Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const defaultStoryParams = {
  backgrounds: {
    default: "solid1",
    values: [
      { name: "solid1", value: "#48319D" },
      { name: "solid2", value: "#1F1D47" },
    ],
  },
};

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  defaultValue: "Value",
  onChange: (e) => e.target.value,
};
Default.parameters = { ...defaultStoryParams };

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Some label",
  defaultValue: "Value",
  onChange: (e) => e.target.value,
};
WithLabel.parameters = { ...defaultStoryParams };

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Enter value...",
  onChange: (e) => e.target.value,
};
WithPlaceholder.parameters = { ...defaultStoryParams };

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Some label",
  placeholder: "Enter value...",
  icon: "search",
  iconClassName:
    "!h-4 !w-4 fill-dark-secondary absolute top-1/2 -translate-y-1/2 left-2",
  onChange: (e) => e.target.value,
};
WithIcon.parameters = { ...defaultStoryParams };
