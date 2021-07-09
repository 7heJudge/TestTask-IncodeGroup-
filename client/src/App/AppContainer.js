import './App.module.css';
import {useEffect, useRef} from "react";
import * as io from "socket.io-client";
import * as React from "react";
import App from "./App";
import {connect, useDispatch} from "react-redux";
import {tickerAC} from "../redux/ticker-reducer";

const socket = io.connect('http://localhost:4000');
socket.emit('start');

function AppContainer(props) {
    const dispatch = useDispatch();// Добавил, т.к. в mapDispatchToProps не диспатчит, не понял почему.
    const prevValue = useRef([]);
    useEffect(() => {
        socket.on('ticker', response => {
                dispatch(tickerAC(response));
            }
        );
    }, []);
    useEffect(() => {
        prevValue.current = props.ticker;
    }, [props.ticker]);
    socket.on('newFetchInterval', count => {
            alert(count);
        }
    );
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
