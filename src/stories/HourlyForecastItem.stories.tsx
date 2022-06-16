import { ComponentMeta, ComponentStory } from "@storybook/react";
import HourlyForecastItem from "../components/HourlyForecastItem";

export default {
  title: "Hourly forecast item",
  component: HourlyForecastItem,
} as ComponentMeta<typeof HourlyForecastItem>;

const defaultStoryParams = {
  backgrounds: {
    default: "solid1",
    values: [
      { name: "solid1", value: "#48319D" },
      { name: "solid2", value: "#1F1D47" },
    ],
  },
};

const Template: ComponentStory<typeof HourlyForecastItem> = (args) => {
  return <HourlyForecastItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  date: "12 AM",
  icon: "04d",
  temperature: 20.06,
};
Default.parameters = { ...defaultStoryParams };

export const Active = Template.bind({});
Active.args = {
  date: "Now",
  icon: "10d",
  temperature: 15.78,
  isActive: true,
};
Active.parameters = { ...defaultStoryParams };
