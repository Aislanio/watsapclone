import React, { useState} from 'react';
import './App.css';


import ChatLisItem from './componets/ChatListitem';
import ChatIntron from './componets/ChatIntro';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
    const [chatlist, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},]);
  return (
        <div className="app-window">
            <div className="sidebar">
                  <header>
                    <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="foto do perfil"/>
                    <div className="headaer--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color:'#919191'}}/>
                        </div>
                        <div className="header--btn">
                            
                            < ChatIcon style={{color:'#919191'}}/>
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{color:'#919191'}}/>
                        </div>
                    </div>
                  </header>

                  <div className="search">
                     <div className="search--input">  
                     <SearchIcon fontSize="small" style={{color:'#919191'}} />
                     <input type="search" placeholder="Procura ou começar uama nova conversar"/>
                     </div>
                  </div>
                  <div className="chatlist">
                      {chatlist.map((item, key)=>(
                          <ChatLisItem 
                          key={key}
                          />
                      ))}
                  </div>
            </div>
            <div className="contentarea">
                <ChatIntron/> 
            </div>
        </div>
    );
 }