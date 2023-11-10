import "./widget.scss"
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
const Widget = ({type}) => {
    let data = null;

    //temporary db (not fetching anything)
    const amount= 1000;
    const diff= 25;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonRoundedIcon className={"icon"}/>
            };
            break;
        case "order":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartRoundedIcon className={"icon"}/>
            };
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnRoundedIcon className={"icon"}/>
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletRoundedIcon className={"icon"}/>
            };
            break;
        default:
            break;
    }
    return (
        <div className={"widget"}>
            <div className={"left"}>
                <span className={"title"}>{data.title}</span>
                <span className={"counter"}>{data.isMoney && "$"} {amount}</span>
                <span className={"link"}>{data.link}</span>
            </div>
            <div className={"right"}>
                <div className={"percentage positive"}>
                    <KeyboardArrowUpRoundedIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;