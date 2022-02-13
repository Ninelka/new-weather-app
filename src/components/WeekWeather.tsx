import OneDayWeather from "./OneDayWeather";

const WeekWeather = () => {
    return (
        <ul>
            <li>
                Sunday
                <OneDayWeather/>
            </li>
            <li>
                Monday
                <OneDayWeather/>
            </li>
            <li>
                Tuesday
                <OneDayWeather/>
            </li>
            <li>
                Wednesday
                <OneDayWeather/>
            </li>
            <li>
                Thursday
                <OneDayWeather/>
            </li>
            <li>
                Friday
                <OneDayWeather/>
            </li>
            <li>
                Saturday
                <OneDayWeather/>
            </li>
        </ul>
    )
}

export default WeekWeather;
