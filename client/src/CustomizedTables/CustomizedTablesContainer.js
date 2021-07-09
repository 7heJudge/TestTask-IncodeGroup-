import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CustomizedTables from "./CustomizedTables";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 16,
        fontWeight: 700,
    },
    body: {
        fontSize: 16,
        fontWeight: 700,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(ticker, price, change, change_percent, dividend, yld) {
    return {ticker, price, change, change_percent, dividend, yld};
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const dataForMapping = (item) => createData(item.ticker, item.price, item.change, item.change_percent, item.dividend, item.yield);

export let fillingAlongLength = (tickerVisible, ticker, setTickerVisible) => {
    let visibleArray = [];
    if (tickerVisible.length !== ticker.length) {
        ticker.forEach(item => visibleArray.push(true));
        setTickerVisible(visibleArray);
    }
    ;
};

export default function CustomizedTablesContainer(props) {
    const [tickerVisible, setTickerVisible] = useState([]);
    fillingAlongLength(tickerVisible, props.ticker, setTickerVisible);
    const classes = useStyles();
    let rows = props.ticker.map(dataForMapping);
    let prevRows = props.prevValue.map(dataForMapping);
    return (
        <CustomizedTables tickerVisible={tickerVisible} setTickerVisible={setTickerVisible} classes={classes}
                          rows={rows} prevRows={prevRows} StyledTableRow={StyledTableRow}
                          StyledTableCell={StyledTableCell}/>
    );
}
