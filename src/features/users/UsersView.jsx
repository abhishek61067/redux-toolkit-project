import { useEffect } from "react";
import { fetchUsers } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

const UsersView = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div id="usersPageId">
      <h2>List of users</h2>
      {users.loading ? (
        <p>loading..</p>
      ) : users.error ? (
        <p>users.error</p>
      ) : users.users.length > 0 ? (
        users.users.map((user) => <li key={user.id}>{user.name}</li>)
      ) : (
        "empty data"
      )}
    </div>
  );
};

export default UsersView;
