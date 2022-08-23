import React from "react";
import classes from './Userlist.module.css';
import Card from "../UI/Card";

const Userlist = props =>{
    return(
        <Card className={classes.users}>
        <ul>
            {
                props.users.map(user =>
                    <li key={user.id}>{user.name} ({user.age} years)</li>)
            }
        </ul>
        </Card>
    );

};
export default Userlist;