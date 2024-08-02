import { useEffect } from "react";
import { fetchUsers } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../utils/isEmpty";

const UsersView = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div id="usersPageId">
      {/* <h2>List of users</h2> */}
      {users.loading ? (
        <h1>loading..</h1>
      ) : users.error ? (
        <p>users.error</p>
      ) : !isEmpty(users.users) ? (
        users.users.map((user) => <li key={user.id}>{user.name}</li>)
      ) : (
        "empty data"
      )}
    </div>
  );
};

export default UsersView;
