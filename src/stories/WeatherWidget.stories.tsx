import { ComponentMeta, ComponentStory } from "@storybook/react";
import WeatherWidget from "../components/WeatherWidget";

export default {
  title: "Weather widget",
  component: WeatherWidget,
} as ComponentMeta<typeof WeatherWidget>;

const Template: ComponentStory<typeof WeatherWidget> = (args) => {
  return <WeatherWidget {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  city: "Toronto, Canada",
  icon: "04n",
  temp: "20",
  temp_min: "18",
  temp_max: "24",
  weather_description: "Fast Wind",
};
