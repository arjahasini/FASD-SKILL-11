import React, { useState, useEffect } from "react";

function LocalUserList() {

const [users, setUsers] = useState([]);

useEffect(() => {
fetch("/users.json")
.then(res => res.json())
.then(data => setUsers(data));
}, []);

return (
<div>
<h2>Local Users</h2>

{users.map(user => (
<p key={user.id}>
{user.name} - {user.email} - {user.phone}
</p>
))}

</div>
);
}

export default LocalUserList;