import '../App.css';
import {useEffect, useRef, useState} from "react";
import * as io from "socket.io-client";
import * as React from "react";
import App from "./App";
import {connect, useDispatch, useSelector} from "react-redux";
import {tickerAC} from "../redux/ticker-reducer";

const socket = io.connect('http://localhost:4000');
socket.emit('start');

function AppContainer(props) {
    const dispatch = useDispatch();// Добавил, т.к. в mapDispatchToProps не диспатчит, не понял почему.
    // const [ticker, setTicker] = useState([]);
    const prevValue = useRef([]);
    useEffect(() => {
        socket.on('ticker', response => {
            // setTicker(response);
            dispatch(tickerAC(response));
            }
        );
    }, []);
    useEffect(() => {
        prevValue.current = props.ticker;
    }, [props.ticker]);
    return (
        <div>
            <App ticker={props.ticker} prevValue={prevValue}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        ticker: state.tickerPage.ticker
    };
};

export default connect(mapStateToProps, {tickerAC})(AppContainer);
