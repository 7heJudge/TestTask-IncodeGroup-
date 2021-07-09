import tickerReducer, {tickerAC} from "./ticker-reducer";

test('New values should not equal old ones (almost always)', () => {
    let action = tickerAC([
        {"ticker":"AAPL","exchange":"NASDAQ","price":"276.29","change":"114.47","change_percent":"0.74","dividend":"0.06","yield":"1.86","last_trade_time":"2021-07-08T15:03:51.000Z"},
        {"ticker":"GOOGL","exchange":"NASDAQ","price":"207.67","change":"134.43","change_percent":"0.24","dividend":"0.22","yield":"1.14","last_trade_time":"2021-07-08T15:03:51.000Z"},
        {"ticker":"MSFT","exchange":"NASDAQ","price":"234.70","change":"143.25","change_percent":"0.31","dividend":"0.47","yield":"0.72","last_trade_time":"2021-07-08T15:03:51.000Z"},
        {"ticker":"AMZN","exchange":"NASDAQ","price":"105.50","change":"127.06","change_percent":"0.23","dividend":"0.54","yield":"1.54","last_trade_time":"2021-07-08T15:03:51.000Z"},
        {"ticker":"FB","exchange":"NASDAQ","price":"238.95","change":"184.27","change_percent":"0.27","dividend":"0.79","yield":"1.35","last_trade_time":"2021-07-08T15:03:51.000Z"},
        {"ticker":"TSLA","exchange":"NASDAQ","price":"273.66","change":"61.98","change_percent":"0.09","dividend":"0.58","yield":"0.27","last_trade_time":"2021-07-08T15:03:51.000Z"}
    ]);
    let state = [
        {"ticker":"AAPL","exchange":"NASDAQ","price":"248.62","change":"196.54","change_percent":"0.25","dividend":"0.87","yield":"1.87","last_trade_time":"2021-07-08T15:02:36.000Z"},
        {"ticker":"GOOGL","exchange":"NASDAQ","price":"285.76","change":"72.80","change_percent":"0.57","dividend":"0.44","yield":"0.83","last_trade_time":"2021-07-08T15:02:36.000Z"},
        {"ticker":"MSFT","exchange":"NASDAQ","price":"270.33","change":"125.69","change_percent":"0.41","dividend":"0.57","yield":"1.03","last_trade_time":"2021-07-08T15:02:36.000Z"},
        {"ticker":"AMZN","exchange":"NASDAQ","price":"268.95","change":"81.27","change_percent":"0.65","dividend":"0.89","yield":"1.74","last_trade_time":"2021-07-08T15:02:36.000Z"},
        {"ticker":"FB","exchange":"NASDAQ","price":"299.16","change":"152.19","change_percent":"0.44","dividend":"0.82","yield":"0.80","last_trade_time":"2021-07-08T15:02:36.000Z"},
        {"ticker":"TSLA","exchange":"NASDAQ","price":"129.38","change":"60.29","change_percent":"0.02","dividend":"0.23","yield":"0.12","last_trade_time":"2021-07-08T15:02:36.000Z"}
    ];
    let newState = tickerReducer(state, action);
    expect(JSON.stringify(state)!==JSON.stringify(newState)).toBe(true);
});
