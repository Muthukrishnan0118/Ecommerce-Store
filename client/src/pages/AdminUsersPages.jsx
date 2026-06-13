import { useEffect, useState } from "react";
import axios from "axios";

function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/users");

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadUsers();
  }, []);

  const handleMakeAdmin = async (id) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/users/${id}/admin`,
      );

      alert(data.message);

      const updatedUsers = users.map((user) =>
        user._id === id ? { ...user, isAdmin: !user.isAdmin } : user,
      );

      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
      alert("Failed to update user");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Users</h1>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.isAdmin ? "✅ Admin" : "👤 User"}</td>

              <td>
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </td>

              <td>
                <button onClick={() => handleMakeAdmin(user._id)}>
                  {user.isAdmin ? "Remove Admin" : "Make Admin"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsersPage;
