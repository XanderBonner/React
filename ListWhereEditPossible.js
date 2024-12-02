import { useState } from "react";


function myList (){ 
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", status: "Active" },
        { id: 2, name: "Bob", status: "Inactive" },
    ]);
    
    const handleEditStatus = (id, newStatus) => {
        setUsers(
            users.map((user) =>
                user.id === id ? { ...user, status: newStatus } : user
            )
        );
    };
    
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - 
                        <select
                            value={user.status}
                            onChange={(e) => handleEditStatus(user.id, e.target.value)}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    );
}