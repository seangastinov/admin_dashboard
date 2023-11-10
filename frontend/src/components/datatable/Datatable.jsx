import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {rows, columns} from '../../datatablesources'
import { Link } from "react-router-dom";
const Datatable = ({type, rows, columns}) => {
    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: () => {
            return (
                <div className={"cellAction"}>
                    <Link to={`/${type}s/:id`} style={{textDecoration: "none"}}>
                        <button className={"view"}>View</button>
                    </Link>
                    <button className={"delete"}>Delete</button>
                </div>
            );
        },
    }

    return (
        <div className={"datatable"}>
            <div className="datatableTitle">
                <Link to={`/${type}s/new`} style={{textDecoration: "none"}} className="link">
                    <button className={"edit"}>Add New {type}</button>
                </Link>
            </div>
            <DataGrid
                rows={rows}
                columns={columns.concat(actionColumn)} // concat action column to the end of columns
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;