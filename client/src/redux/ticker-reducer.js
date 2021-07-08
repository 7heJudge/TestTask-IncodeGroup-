const SET_DATA = 'SET_DATA';

let initialState = {
    ticker: []
};

const tickerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                ticker: [...action.ticker]
            };
        }
        default:
            return state;
    }
};
export default tickerReducer;
export const tickerAC = (ticker) => ({type: SET_DATA, ticker});
