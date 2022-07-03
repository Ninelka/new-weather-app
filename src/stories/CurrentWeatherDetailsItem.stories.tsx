import { ComponentMeta, ComponentStory } from "@storybook/react";

import CurrentWeatherDetailsItem from "../components/CurrentWeatherDetailsItem";

export default {
  title: "Current weather details item",
  component: CurrentWeatherDetailsItem,
} as ComponentMeta<typeof CurrentWeatherDetailsItem>;

const defaultStoryParams = {
  backgrounds: {
    default: "solid1",
    values: [
      { name: "solid1", value: "#48319D" },
      { name: "solid2", value: "#1F1D47" },
    ],
  },
};

const Template: ComponentStory<typeof CurrentWeatherDetailsItem> = (args) => {
  return <CurrentWeatherDetailsItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Sunrise",
  value: "20°",
  icon: "sunrise",
};
Default.parameters = { ...defaultStoryParams };

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: "Feels like",
  value: "20°",
  description: "Some text",
  icon: "thermometer",
};
WithDescription.parameters = { ...defaultStoryParams };
