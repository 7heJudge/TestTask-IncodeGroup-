import '../App.css';
import CustomizedTables from ".././CustomizedTables/CustomizedTables";
import * as React from "react";

function App(props) {
    return (
        <div>
            <div className={"text-center"}>Most Popular Stocks on Google</div>
            <CustomizedTables ticker={props.ticker} prevValue={props.prevValue.current}/>
        </div>
    );
}

export default App;