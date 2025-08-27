import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/UsersSlice';

const UsersSection = () => {
    const {list:users,error,loading}=useSelector((state)=>state.users);
    const dispatch=useDispatch();
    useEffect(() => {
    dispatch(fetchUsers()); // 👈 Fetch users when component mounts
  }, [dispatch]);

  return (
    <div>
      <h1>User Details Implementation</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <h4>List of Users:</h4>
      {users && <ul>
        {users.map(user => <li key={user.id} style={{listStyle:"none"}}>{user.firstName} {user.lastName}</li>)}
      </ul>
      }
    </div>
  )
}

export default UsersSection
