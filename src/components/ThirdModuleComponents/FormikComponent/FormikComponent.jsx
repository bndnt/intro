import Profile from "../../Profile/Profile";
import FormikAddProfile from "../FormikAddProfile/FormikAddProfile";
import userData from "../../../data/usersForFormikList.json";
import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./FormikComponent.module.css";

const FormikComponent = () => {
  const [users, setUsers] = useState(userData);
  const [filter, setFilter] = useState("");
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
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
  };
  const filteredProfile = users.filter((item) =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div>
      <FormikAddProfile addProfile={addProfile} />
      <div className="searchProfileBlock">
        <h3>Search by name</h3>
        <input
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={handleFilter}
        />
      </div>
      <div className="usersFlex">
        {filteredProfile.map((user) => {
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

export default FormikComponent;
