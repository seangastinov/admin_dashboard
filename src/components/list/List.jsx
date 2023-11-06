import "./list.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {
    function createData(trackingID, product, customer, date, amount, paymentMethod, stats,img) {
        return { trackingID, product, customer, date, amount, paymentMethod, stats, img};
    }

    const rows = [
        createData('728900', 'Apple Macbook Pro', 'John Doe', '2 Dec 2022', '$2,300', 'Credit Card', 'Approved', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mbp13-m2-spacegray-202208?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1659374923283'),
        createData('728901', 'Acer Nitro 1100', 'Sean Gastinov', '4 Dec 2022', '$1,200', 'Cash', 'Approved', 'https://m.media-amazon.com/images/I/81bc8mA3nKL.jpg'),
        createData('728902', 'Intel i5-10600K', 'Shane Lake', '8 Dec 2022', '$750', 'Online', 'Pending','https://m.media-amazon.com/images/I/61xAzEoCuhL.jpg'),
        createData('728903', 'Nvidia RTX 3080', 'Amanda May', '12 Dec 2022', '$1,450', 'Credit Card', 'Approved','https://m.media-amazon.com/images/I/71Felu8C4FS.jpg'),
        createData('728904', 'AMD Ryzen 7 5800X', 'Justin Dean', '19 Dec 2022', '$2,200', 'Cash', 'Pending','https://m.media-amazon.com/images/I/61IIbwz-+ML._AC_UF894,1000_QL80_.jpg'),
        createData('728905', 'Samsung 970 Evo', 'Marcel Orlando', '26 Dec 2022', '$1,000', 'Online', 'Approved','https://www.storagereview.com/wp-content/uploads/2018/04/StorageReview-Samsung-970-EVO-1280x720.jpg'),
    ];
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