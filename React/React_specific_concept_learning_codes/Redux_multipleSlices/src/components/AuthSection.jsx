
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleAuth } from '../store/AuthSlice';

const AuthSection = () => {
     const {isLoggedIn,user}=useSelector((state) => state.auth);
  const dispatch=useDispatch();
  return (
    <div>
        <h1>AuthSlice Implementation:</h1>
              <p>{isLoggedIn ?`Logged in user ${user.name}` : "Not yet logged in"}</p>
              <button onClick={()=> dispatch(toggleAuth({name:"Alisha"}))}>{isLoggedIn? "Log out" : "Login"}</button>
      
    </div>
  )
}

export default AuthSection
