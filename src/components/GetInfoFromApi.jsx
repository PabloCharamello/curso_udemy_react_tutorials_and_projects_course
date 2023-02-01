import React from "react";

export const GetInfoFromApi = () => {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.randomuser.me/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const userData = {
          name: data.results[0].name.first,
          email: data.results[0].email,
        };
        setUser(userData);
      });
  }, []);

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </div>
  );
};
