import './sidebar.scss';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import MedicalInformationRoundedIcon from '@mui/icons-material/MedicalInformationRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <div className={"top"}>
                <span className={"logo"}>Admin</span>
            </div>
            <hr />
            <div className={"center"}>
                <ul>
                    <p className={"title"}>MAIN</p>
                    <li>
                        <SpaceDashboardRoundedIcon className={"icon"}/>
                        <span>Dashboard</span>
                    </li>
                    <p className={"title"}>LISTS</p>
                    <li>
                        <PeopleAltRoundedIcon className={"icon"}/>
                        <span>Users</span>
                    </li>
                    <li>
                        <Inventory2RoundedIcon className={"icon"}/>
                        <span>Products</span>
                    </li>
                    <li>
                        <SellRoundedIcon className={"icon"}/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingRoundedIcon className={"icon"}/>
                        <span>Delivery</span>
                    </li>
                    <p className={"title"}>USEFUL</p>
                    <li>
                        <InsightsRoundedIcon className={"icon"}/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveRoundedIcon className={"icon"}/>
                        <span>Notifications</span>
                    </li>
                    <p className={"title"}>SERVICE</p>
                    <li>
                        <MedicalInformationRoundedIcon className={"icon"}/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <MonitorHeartRoundedIcon className={"icon"}/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <TuneRoundedIcon className={"icon"}/>
                        <span>Settings</span>
                    </li>
                    <p className={"title"}>USER</p>
                    <li>
                        <AccountBoxRoundedIcon className={"icon"}/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutRoundedIcon className={"icon"}/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className={"bottom"}>
                <div className={"colorOption"}></div>
                <div className={"colorOption"}></div>
            </div>
        </div>
    );
};

export default Sidebar;