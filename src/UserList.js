import { useEffect, useState } from "react";
import User from "./User";

export default function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(
    function () {
      async function fetchList() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

        const data = await res.json();
        setListOfUsers(data);
      }

      fetchList();
    },
    [listOfUsers]
  );

  return (
    <div className="list">
      <ul>
        {listOfUsers.map((user) => (
          <User item={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}
