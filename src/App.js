import {Forecasts, HeaderComponent} from "./Components";
import {CurrentWeatherComponent} from "./Components";


const App = () => {
    return (
        <div>
            <HeaderComponent/>
            <CurrentWeatherComponent/>
            {/*<Forecasts/>*/}
        </div>
    );
};

export {App};