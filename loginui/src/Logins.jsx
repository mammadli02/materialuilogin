import React from 'react'
import { useState } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Checkbox from '@material-ui/core/Checkbox';

const Logins = ({ users, setIsLoggedIn, user, setUser,handleChange }) => {
    let [wrongUser, setWrongUser] = useState(false);

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();

        let userFound = users.find((item) => item.username === user.username && item.password === user.password);

        if (userFound === undefined)
            userFound = false;
        else {
            user.fullName = userFound.fullName;
            userFound = true;
        }
        setIsLoggedIn(userFound);
        if (userFound) {
            setWrongUser(false);
        }
        else {
            setWrongUser(true);
        }
    }


    const paperStyle={padding :20,height:'80vh',width:410, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#9c27b0'}
    const btnstyle={margin:'8px 0'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={(e) => handleSubmit(e)}>
                <TextField label='Username' placeholder='Enter username' name="username" onChange={(e) => handleChange(e)} type='text'   fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password'  name="password" onChange={(e) => handleChange(e)}  fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
             
                <p  style={{ color: 'red' }}>{wrongUser ? "wrong username or password" : ""}</p>
                
                <Typography style={{display: 'flex', justifyContent: 'space-between' }} >
                     <Link href="#" >
                        Forgot password ?
                </Link>
               <Typography>
                  Do you have an account ?
                  <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>

                </Typography>
                <Typography style={{textAlign:'center', marginTop:'50px'}}> 
                <Link href="#" onClick={()=>handleChange("event",1)}>
                Copyright © Your Website 2023.
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )

}

export default Logins