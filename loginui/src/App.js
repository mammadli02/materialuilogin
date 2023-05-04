
import Logins from "./Logins";
import { useState } from 'react';
import Wellcome from './Welcome';
import { users } from './users';
// import SignInOutContainer from './containers'
function App() {
  let[isLoggodIn,setIsLoggedIn] = useState(false);
  let[user,setUser] = useState({});
 
  let[newUser,setNewUser] = useState({name:'',username:''});
  function handleChange(e) {
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
  return (
    <>
       {/* <SignInOutContainer/> */}
    <div style={{display:'flex',justifyContent:'center'}}>
          {isLoggodIn ? <Wellcome fullname={user.fullName}/> : <Logins user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} users={users}/>}
    </div>
   
      </>
  )

}

export default App;
