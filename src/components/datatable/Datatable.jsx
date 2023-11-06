import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {rows, columns} from './datatablesources'

const Datatable = () => {
    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className={"cellAction"}>
                    <button className={"edit"}>Edit</button>
                    <button className={"delete"}>Delete</button>
                </div>
            );
        },
    }

    return (
        <div className={"datatable"}>
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