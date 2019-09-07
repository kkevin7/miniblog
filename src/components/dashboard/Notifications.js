import React from 'react';
import moment from 'moment' ;
import 'moment/locale/es';

const Notifications = (props) =>{
    const {notifications} = props;
    return (
        <div className="section">
            <div className="card z-depth-3 blue-grey darken-1">
                 <div className="card-content white-text">
                     <span className="card-title">Notificaciones</span>
                     <ul className="notifications">
                        { notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="pink-text text-lighten-2">{item.user}</span>
                                    <span> {item.content}</span>
                                    <div className="grey-text text-lighten-1 note-date">
                                        {moment(item.time.toDate()).local('es').fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                     </ul>
                 </div>
            </div>
        </div>
    )
}

export default Notifications;