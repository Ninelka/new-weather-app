import { ComponentMeta, ComponentStory } from "@storybook/react";
import HourlyForecastItem from "../components/HourlyForecastItem";

export default {
  title: "Hourly forecast item",
  component: HourlyForecastItem,
} as ComponentMeta<typeof HourlyForecastItem>;

const Template: ComponentStory<typeof HourlyForecastItem> = (args) => {
  return <HourlyForecastItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  date: "12 AM",
  icon: "04d",
  temperature: 20.06,
};

export const Active = Template.bind({});
Active.args = {
  date: "Now",
  icon: "10d",
  temperature: 15.78,
  isActive: true,
};
