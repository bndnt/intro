import Profile from "../../Profile/Profile";
import TMAddProfile from "../TMAddProfile/TMAddProfile";
import userData from "../../../data/usersList.json";
import { useState } from "react";
import { nanoid } from "nanoid";
const TMUsers = () => {
  const [users, setUsers] = useState(userData);
  const addProfile = (profile) => {
    const finalProfile = {
      ...profile,
      id: nanoid(),
    };
    setUsers([finalProfile, ...users]);
    // console.log(profile);
    // console.log(finalProfile);
  };
  const onDeleteProfile = (profileId) => {
    setUsers(users.filter((item) => item.id !== profileId));
    // console.log("profileId", profileId);
  };
  return (
    <div>
      <TMAddProfile addProfile={addProfile} />
      <div className="usersFlex">
        {users.map((user) => {
          return (
            <Profile
              key={user.email}
              id={user.id}
              name={user.name}
              phone={user.phone}
              email={user.email}
              status={user.status}
              hasPhisicalAdress={user.hasPhisicalAdress}
              imgUrl={user.avatar}
              onDeleteProfile={onDeleteProfile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TMUsers;
