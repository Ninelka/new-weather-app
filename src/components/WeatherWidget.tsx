import { WeatherWidgetProps } from "../interfaces";
import React from "react";
import { Icon } from "./Icon";
import { stringToCapitalize } from "../lib/stringToCapitalize";

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data }) => {
  return (
    <div className="h-auto w-full rounded-3xl bg-widget bg-cover bg-no-repeat p-5">
      <div className="mb-auto flex items-center justify-between">
        <h1 className="text-title-large-2 text-dark-primary">
          {data.main.temp.toFixed()}&deg;
        </h1>
        <Icon
          className="shrink-0"
          width={120}
          height={120}
          path={`assets/images/${data.weather[0].icon}.svg`}
        />
      </div>
      <div className="regular-footnote mt-6 text-dark-secondary">
        <span>
          H:{data.main.temp_min.toFixed()}&deg; L:{data.main.temp_max.toFixed()}
          &deg;
        </span>
      </div>
      <div className="flex items-center justify-between text-dark-primary">
        <div className="regular-body">{`${data.name}, ${data.sys.country}`}</div>
        <div className="regular-footnote">
          {stringToCapitalize(data.weather[0].description)}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
