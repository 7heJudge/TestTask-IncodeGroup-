import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CustomizedTables from "./CustomizedTables";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
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


export default function CustomizedTablesContainer(props) {
    let visibleArray = [];
    const [tickerVisible, setTickerVisible] = useState([]);
    if (tickerVisible.length !== props.ticker.length){
        visibleArray = [];
      props.ticker.forEach(item => visibleArray.push(true));
      setTickerVisible(visibleArray);
    };
    const classes = useStyles();
    let rows = props.ticker.map(item => createData(item.ticker, item.price, item.change, item.change_percent, item.dividend, item.yield));
    let prevRows = props.prevValue.map(item => createData(item.ticker, item.price, item.change, item.change_percent, item.dividend, item.yield));
    return (
        <CustomizedTables tickerVisible={tickerVisible} setTickerVisible={setTickerVisible} classes={classes}
                          rows={rows} prevRows={prevRows} StyledTableRow={StyledTableRow} StyledTableCell={StyledTableCell}/>
    );
}
