function createData(id, username, email, status, age, img) {
    return {id, username, email, status, age, img};
}
export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className={"userWithImg"}>
                    <img
                        className={"image"}
                        src={params.row.img}
                        alt={""}
                    />
                    {params.row.username}
                </div>
            );
        }
    },
    { field: 'email', headerName: 'E-Mail', width: 250 },
    { field: 'status',
        headerName: 'Status',
        width: 120,
        renderCell: (params) => {
            return (
                <div className={`status ${params.value}`}>
                    {params.value}
                </div>
            );
        },
    },
    { field: 'age', headerName: 'Age', width: 70 },

];

//temp data
export const rows = [
    createData('1', 'Aria', 'ariamay@gmail.com', 'Active', '23', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'),
    createData('2', 'Promking', 'seangs@gmail.com', 'Passive', '30', 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
    createData('3', 'IntoTheMoon', 'moonlight@gmai.com Lake', 'Pending', '29', 'https://storage.needpix.com/rsynced_images/man-388104_1280.jpg'),
    createData('4', 'NotTodayJJ', 'kimaaak@gmail.com', 'Active', '17', 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg'),
    createData('5', 'EEqualMCSquare', 'mondimondamondi@gmail.com', 'Active', '45', 'https://www.utahmediators.org/photos/Nathan-Alder.jpg'),
    createData('6', '29Degrees', 'roman2323@gmail.com', 'Pending', '67', 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg'),
];