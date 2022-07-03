import { ComponentMeta, ComponentStory } from "@storybook/react";

import WeatherWidget from "../components/WeatherWidget";

export default {
  title: "Weather widget",
  component: WeatherWidget,
} as ComponentMeta<typeof WeatherWidget>;

const Template: ComponentStory<typeof WeatherWidget> = (args) => {
  return (
    <div className="w-1/3">
      <WeatherWidget {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  data: {
    name: "Toronto",
    sys: {
      country: "Canada",
    },
    main: {
      temp: 20,
      temp_min: 18,
      temp_max: 24,
    },
    weather: [
      {
        description: "Fast Wind",
        icon: "04n",
      },
    ],
  },
};
