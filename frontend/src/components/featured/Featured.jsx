import "./featured.scss";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Featured = () => {
    return (
        <div className={"featured"}>

            <div className={"top"}>
                <span className={"title"}>Total Revenue</span>
                <MoreVertRoundedIcon className={"icon"}/>
            </div>

            <div className={"bottom"}>
                <div className={"featuredCircle"}>
                    <CircularProgressbar value={75} text={`${75}%`}  strokeWidth={5}/>
                </div>
                <p className={"title"}>Total sales made today</p>
                <p className={"amount"}>$500</p>
                <p className={"desc"}>
                    Previous transactions processing. Last payments may not be included.
                </p>
                <span className={"justification"}></span>
                <div className={"summary"}>
                    <div className={"item"}>
                        <p className={"title"}>Target</p>
                        <div className={"amount negative"}>
                            <KeyboardArrowDownRoundedIcon fontSize="small"/>
                            <span className={"resultAmount"}>$12.4K</span>
                        </div>
                    </div>
                    <div className={"item"}>
                        <p className={"title"}>Last Week</p>
                        <div className={"amount positive"}>
                            <KeyboardArrowUpRoundedIcon fontSize="small"/>
                            <span className={"resultAmount"}>$22.9K</span>
                        </div>
                    </div>
                    <div className={"item"}>
                        <p className={"title"}>Last Month</p>
                        <div className={"amount positive"}>
                            <KeyboardArrowUpRoundedIcon fontSize="small"/>
                            <span className={"resultAmount"}>$18.2K</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;