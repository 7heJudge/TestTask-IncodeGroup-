import cls from './App.module.css';
import * as React from "react";
import CustomizedTablesContainer from "../CustomizedTables/CustomizedTablesContainer";

function App(props) {
    return (
        <div>
            <div className={`${cls.title} text-center`}>Most Popular Stocks on Google</div>
            <CustomizedTablesContainer ticker={props.ticker} prevValue={props.prevValue.current}/>
        </div>
    );
}

export default App;