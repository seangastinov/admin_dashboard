import React from 'react';
import './navbar.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className={"wrapper"}>
                <div className={"search"}>
                    <input type={"text"} placeholder={"Search for something..."} />
                    <SearchRoundedIcon className={"icon"}/>
                </div>
                <div className={"items"}>
                    <div className={"item"}>
                        <LanguageRoundedIcon className={"icon"}/>
                        English
                    </div>
                    <div className={"item"}>
                        <DarkModeRoundedIcon className={"icon"}/>
                    </div>
                    <div className={"item"}>
                        <FullscreenExitRoundedIcon className={"icon"}/>
                    </div>
                    <div className={"item"}>
                        <NotificationsRoundedIcon className={"icon"}/>
                        <div className={"badge"}>2</div>
                    </div>
                    <div className={"item"}>
                        <ChatBubbleRoundedIcon className={"icon"}/>
                        <div className={"badge"}>2</div>
                    </div>
                    <div className={"item"}>
                        <ListRoundedIcon className={"icon"}/>
                    </div>
                    <div className={"item"}>
                        <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                                alt="" className={"profile"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;