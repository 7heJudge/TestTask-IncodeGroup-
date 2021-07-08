import React, {useEffect, useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import cls from './CustomizedTables.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'

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

export default function CustomizedTables(props) {
    const [tickerVisible, setTickerVisible] = useState([true, true, true, true, true, true]);
    const classes = useStyles();
    let rows = props.ticker.map(item => createData(item.ticker, item.price, item.change, item.change_percent, item.dividend, item.yield));
    let prevRows = props.prevValue.map(item => createData(item.ticker, item.price, item.change, item.change_percent, item.dividend, item.yield));
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Ticker</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Change&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Change_percent&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Dividend&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Yield&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Visible&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <StyledTableRow key={row.ticker}>
                            <StyledTableCell component="th" scope="row">
                                {row.ticker}
                            </StyledTableCell>
                            {tickerVisible[index] && <>
                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                <StyledTableCell align="right">{row.change}</StyledTableCell>
                                {prevRows[index] === undefined
                                    ? <StyledTableCell align="right">{row.change_percent}%</StyledTableCell>
                                    : <StyledTableCell align="right"
                                                       className={prevRows[index].change_percent > row.change_percent ? cls.wayDown : cls.wayUp}>
                                        <FontAwesomeIcon className={cls.iconFloatLeft}
                                                         icon={prevRows[index].change_percent > row.change_percent
                                                             ? faChevronDown
                                                             : faChevronUp}/>{row.change_percent}%</StyledTableCell>
                                }
                                <StyledTableCell align="right">{row.dividend}</StyledTableCell>
                                <StyledTableCell align="right">{row.yld}</StyledTableCell>
                            </>}
                            <StyledTableCell align="right" colSpan={"6"}>
                                <FontAwesomeIcon
                                    onClick={() => setTickerVisible(tickerVisible.map((item, ind) => ind === index
                                        ? !item
                                        : item))}
                                    className={cls.eyeSlash}
                                    icon={tickerVisible[index] ? faEye : faEyeSlash}/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
