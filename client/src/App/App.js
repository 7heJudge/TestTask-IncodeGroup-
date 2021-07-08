import '../App.css';
import * as React from "react";
import CustomizedTablesContainer from "../CustomizedTables/CustomizedTablesContainer";

function App(props) {
    return (
        <div>
            <div className={"text-center"}>Most Popular Stocks on Google</div>
            <CustomizedTablesContainer ticker={props.ticker} prevValue={props.prevValue.current}/>
        </div>
    );
}

export default App;