import React, {useEffect, useState} from 'react';
import axios from 'axios';
const basedURL = 'http://localhost:7000/users';


const List = ({users}) => {
    return (
        <div>
            {users && users.map((user, i)=> {
                return (
                    <h1 key={i}>
                        {user.email}
                    </h1>
                )
            })}
        </div>
    )
}

export default List;