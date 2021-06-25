import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserList from "./UserList";
import { fetchUserList } from "../features/userListSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUserList());
    console.log(fetchUserList());
  }, [dispatch]);

  return <UserList />;
}

export default App;
