import React from 'react';
import './Chatlistitem.css';

export default () =>{
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--nome">Aislanio</div>
                    <div className="chatListItem--date"> 19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg"> 
                        <p>opa,  tudo bem ?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}