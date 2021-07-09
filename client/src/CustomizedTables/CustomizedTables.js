import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import cls from './CustomizedTables.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faEyeSlash,
    faEye,
    faAngleDoubleUp,
    faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons'
import Table from "@material-ui/core/Table";

export default function CustomizedTables(props) {
    const handleClick = (props, index) => props.setTickerVisible(props.tickerVisible.map((item, ind) => ind === index
        ? !item
        : item));
    return (
        <TableContainer component={Paper}>
            <Table className={props.classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <props.StyledTableCell>Ticker</props.StyledTableCell>
                        <props.StyledTableCell align="right">Price</props.StyledTableCell>
                        <props.StyledTableCell align="right">Change&nbsp;</props.StyledTableCell>
                        <props.StyledTableCell align="right">Change_percent&nbsp;</props.StyledTableCell>
                        <props.StyledTableCell align="right">Dividend&nbsp;</props.StyledTableCell>
                        <props.StyledTableCell align="right">Yield&nbsp;</props.StyledTableCell>
                        <props.StyledTableCell align="right">Visible&nbsp;</props.StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row, index) => (
                        <props.StyledTableRow key={row.ticker}>
                            <props.StyledTableCell component="th" scope="row">
                                {row.ticker}
                            </props.StyledTableCell>
                            {props.tickerVisible[index] && <>
                                <props.StyledTableCell align="right">{row.price}</props.StyledTableCell>
                                <props.StyledTableCell align="right">{row.change}</props.StyledTableCell>
                                {props.prevRows[index] === undefined
                                    ? <props.StyledTableCell align="right">{row.change_percent}%</props.StyledTableCell>
                                    : <props.StyledTableCell align="right"
                                                             className={props.prevRows[index].change_percent > row.change_percent ? cls.wayDown : cls.wayUp}>
                                        <FontAwesomeIcon className={cls.iconFloatLeft}
                                                         icon={props.prevRows[index].change_percent > row.change_percent
                                                             ? faAngleDoubleDown
                                                             : faAngleDoubleUp}/>{row.change_percent}%
                                    </props.StyledTableCell>
                                }
                                <props.StyledTableCell align="right">{row.dividend}</props.StyledTableCell>
                                <props.StyledTableCell align="right">{row.yld}</props.StyledTableCell>
                            </>}
                            <props.StyledTableCell align="right" colSpan={"6"}>
                                <FontAwesomeIcon
                                    onClick={() => handleClick(props, index)}
                                    className={cls.eyeSlash}
                                    icon={props.tickerVisible[index] ? faEye : faEyeSlash} data-testid="toggle"/>
                            </props.StyledTableCell>
                        </props.StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
