import UserList from "./UserList";
import avatar1 from "../../utils/avatar-test/avatar-1.jpg"
import avatar2 from "../../utils/avatar-test/avatar-2.jpg"
import avatar3 from "../../utils/avatar-test/avatar-3.jpg"
import avatar4 from "../../utils/avatar-test/avatar-4.jpg"
import avatar5 from "../../utils/avatar-test/avatar-5.jpg"
import avatar6 from "../../utils/avatar-test/avatar-6.jpg"

const Users = () => {
  const USERS = [
    { id: 1, name: "Vladi toxic", image: avatar1, placesNumber: 1 },
    { id: 2, name: "Fedo weirdo", image: avatar2, placesNumber: 2 },
    { id: 3, name: "Olly overthinker", image: avatar3, placesNumber: 3 },
    { id: 4, name: "Dmitrii vouno", image: avatar4, placesNumber: 4 },
    { id: 5, name: "Kitten", image: avatar5, placesNumber: 5 },
    { id: 6, name: "Anasteisha", image: avatar6, placesNumber: 57 },
  ];

  return <UserList items={USERS} />;
};

export default Users;
