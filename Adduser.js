import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './Adduser.module.css';
import Button from '../UI/Button';
const Adduser = (props)=>{
 
     const [enteredfirstname, setEnteredfirstname] = useState("");
     const [enteredage, setEnteredage] = useState("");

     const firstnameChangehandler =(event) =>{
        setEnteredfirstname(event.target.value);
     }
     const ageChangehandler = (event) =>{
        setEnteredage(event.target.value);
     }



const AdduserHandler = (event ) =>{
    event.preventDefault();
    
if(enteredfirstname.trim().length === 0 || enteredage.trim().length === 0){
    return;
}
if(enteredage < 1){
    return;
}
props.onAdder(enteredfirstname , enteredage);
setEnteredfirstname('');
setEnteredage('');
}
    


    return(
        <Card className={classes.input}>
        <form onSubmit={AdduserHandler}>
            <label htmlFor='Firstname'>First name</label>
            <input  id='firstname' type="text" value={enteredfirstname}  onChange={firstnameChangehandler}/>
            <label htmlFor='Age'>Age(yrears)</label>
            <input  type="text" id='age'  value={enteredage}   onChange={ageChangehandler} />
            <Button type='Submit'>Add details</Button>
        </form>
        </Card>
    );

};
export default Adduser;