import './single.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";
const Single = () => {
    return (
        <div className={"single"}>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <div className={"top"}>
                    <div className={"left"}>
                        <button className={"editButton"}>Edit</button>
                        <h1 className={"title"}>Information</h1>
                        <div className={"item"}>
                            <img
                                src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"}
                                alt={""}
                                className={"itemImg"}/>
                            <div className={"details"}>
                                <h1 className="itemTitle">Aria</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">ariamay@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+65 1234 6789</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">62 Nanyang Crescent</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Singapore</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"right"}>
                        <Chart aspect={4} title={"User Spending ( Last 6 Months )"}/>
                    </div>

                </div>

                <div className={"bottom"}>
                    <h1 className="title">
                        Purchase History
                    </h1>
                    <List />
                </div>

            </div>

        </div>
    );
};

export default Single;