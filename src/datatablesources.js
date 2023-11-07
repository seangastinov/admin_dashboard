function createDataUser(id, username, email, status, age, img) {
    return {id, username, email, status, age, img};
}

function createDataProduct(id, product, price, stock, status, img) {
    return {id, product, price, stock, status, img};
}
export const columnsUser = [
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
export const rowsUser = [
    createDataUser('1', 'Aria', 'ariamay@gmail.com', 'Active', '23', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'),
    createDataUser('2', 'Promking', 'seangs@gmail.com', 'Passive', '30', 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
    createDataUser('3', 'IntoTheMoon', 'moonlight@gmai.com Lake', 'Pending', '29', 'https://storage.needpix.com/rsynced_images/man-388104_1280.jpg'),
    createDataUser('4', 'NotTodayJJ', 'kimaaak@gmail.com', 'Active', '17', 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg'),
    createDataUser('5', 'EEqualMCSquare', 'mondimondamondi@gmail.com', 'Active', '45', 'https://www.utahmediators.org/photos/Nathan-Alder.jpg'),
    createDataUser('6', '29Degrees', 'roman2323@gmail.com', 'Pending', '67', 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg'),
];

export const columnsProduct = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product',
        headerName: 'Product',
        width: 230,
        renderCell: (params) => {
            return (
                <div className={"productWithImg"}>
                    <img
                        className={"image"}
                        src={params.row.img}
                        alt={""}
                    />
                    {params.row.product}
                </div>
            );
        }
    },
    { field: 'price', headerName: 'Price', width: 180 },
    { field: 'stock', headerName: 'Stock', width: 150 },
    { field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: (params) => {
            return (
                <div className={`status ${params.value}`}>
                    {params.value}
                </div>
            );
        },
    },
];

export const rowsProduct = [
    createDataProduct('1', 'Apple Macbook Pro', '$2,300', '10', 'In-Stock', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mbp13-m2-spacegray-202208?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1659374923283'),
    createDataProduct('2', 'Acer Nitro 1100', '$1,200', '5', 'In-Stock', 'https://m.media-amazon.com/images/I/81bc8mA3nKL.jpg'),
    createDataProduct('3', 'Intel i5-10600K', '$750', '12', 'In-Stock', 'https://m.media-amazon.com/images/I/61xAzEoCuhL.jpg'),
    createDataProduct('4', 'Nvidia RTX 3080', '$1,450', '0', 'Out-of-Stock', 'https://m.media-amazon.com/images/I/71Felu8C4FS.jpg'),
    createDataProduct('5', 'AMD Ryzen 7 5800X', '$2,200', '2', 'In-Stock', 'https://m.media-amazon.com/images/I/61IIbwz-+ML._AC_UF894,1000_QL80_.jpg'),
    createDataProduct('6', 'Samsung 970 Evo', '$1,000', '1', 'In-Stock', 'https://img.global.news.samsung.com/global/wp-content/uploads/2018/04/SSD-970-PROlEVO_Family_main_1.jpg'),
]
