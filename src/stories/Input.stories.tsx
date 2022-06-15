import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  defaultValue: "Value",
  onChange: (e) => e.target.value,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Some label",
  defaultValue: "Value",
  onChange: (e) => e.target.value,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Enter value...",
  onChange: (e) => e.target.value,
};
