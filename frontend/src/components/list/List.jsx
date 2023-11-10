import "./list.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {rows} from './listitemssources';
const List = () => {
    return (
        <TableContainer component={Paper} className={"list"}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={"tableCell"} sx={{fontWeight:"bold"}}>Tracking ID</TableCell>
                        <TableCell className={"tableCell"} sx={{fontWeight:"bold"}}>Product</TableCell>
                        <TableCell className={"tableCell"} sx={{fontWeight:"bold"}}>Customer</TableCell>
                        <TableCell className={"tableCell"} sx={{fontWeight:"bold"}}>Date</TableCell>
                        <TableCell className={"tableCell"} sx={{fontWeight:"bold"}}>Amount</TableCell>
                        <TableCell className={"tableCell"} sx={{fontWeight:"bold"}}>Payment Method</TableCell>
                        <TableCell className={"tableCell"} sx={{fontWeight:"bold"}}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.trackingID}>
                            <TableCell className={"tableCell"}>{row.trackingID}</TableCell>
                            <TableCell className={"tableCell"}>
                                <div className={"productWrapper"}>
                                    <img className={"img"} src={row.img} alt={""}/>
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className={"tableCell"}>{row.customer}</TableCell>
                            <TableCell className={"tableCell"}>{row.date}</TableCell>
                            <TableCell className={"tableCell"}>{row.amount}</TableCell>
                            <TableCell className={"tableCell"}>{row.paymentMethod}</TableCell>
                            <TableCell className={"tableCell"}>
                                <span className={`status ${row.stats}`}>
                                    {row.stats}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;