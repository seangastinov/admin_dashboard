import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import {useState} from "react";

const New = ({input, title}) => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const handleInputDataChange = (index, value) => {
        const updatedInputDataValues = [...data];
        updatedInputDataValues[index] = value;
        setData(updatedInputDataValues);
    };
    console.log("log file:",file);
    console.log("log data:",data);

    return (
        <div className={"new"}>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>

                <div className="top">
                    <h1 className="title">{title}</h1>
                </div>

                <div className="bottom">
                    <div className="left">
                        <img
                            src={file
                                ? URL.createObjectURL(file)
                                : "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725150-stock-illustration-image-available-icon-flat-vector.jpg"
                        }
                            alt=""
                            className={"image"}/>
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInputImage">
                                <label htmlFor={"file"}>
                                    Image: <UploadFileRoundedIcon className={"icon"}/>
                                </label>
                                <input
                                    type="file"
                                    id={"file"}
                                    onChange={(e) => {
                                        console.log("e var:",e)
                                        setFile(e.target.files[0])
                                    }}
                                />
                            </div>

                            {input.map((item) => (
                                <div className="formInput" key={item.id}>
                                    <label>{item.label}</label>
                                    <input
                                        type={item.type}
                                        placeholder={item.placeholder}
                                        onChange={(e) => {
                                            console.log("e var:",e)
                                            handleInputDataChange(item.id, e.target.value)
                                        }}
                                    />
                                </div>
                            ))}
                            <button className="createButton">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;