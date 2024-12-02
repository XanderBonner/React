function UserList({ users }) {
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id}. {user.name} (Age: {user.age})
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  // Example usage:
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
  ];
  
  export default function App() {
    return (
      <div>
        <UserList users={users} />
      </div>
    );
  }
  