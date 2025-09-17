import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Loader from "../../Loader/Loader";

const UserMenu = () => {
  const { isLoading, userName, onlogOut } = useContext(UserContext);
  if (isLoading) return <Loader />;

  return (
    <div>
      {userName === null ? (
        <div>
          <button>Sign In</button>
        </div>
      ) : (
        <div>
          <p>Hello, {userName}</p>
          <button onClick={onlogOut} type="button">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
