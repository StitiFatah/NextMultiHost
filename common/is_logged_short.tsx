import { axiosInstance } from "../api_login";

const IsConnectedShort = (zco, zcheck, zSetUsername) => {
  axiosInstance
    .get("/users/whoami/")
    .then((response) => {
      if (response.status === 200) {
        console.log("User Is connected");
        console.log(response.data["username"]);
        zSetUsername(response.data["username"]);
        zcheck("connected");
      } else {
        console.log("Is not connected");
        console.log(response.data);

        zcheck("anonymous");
        zSetUsername("anonymous");
      }
    })
    .catch((error) => {
      console.log("Is NOT connected");
      console.log(error);

      zcheck("anonymous");
      zSetUsername("anonymous");
    });
};

// to not break components using the version without ID dor the moment

const IsConnectedShortWithID = (zco, zcheck, zSetUsername, zSetUserID) => {
  axiosInstance
    .get("/users/whoami/")
    .then((response) => {
      if (response.status === 200) {
        console.log("User Is connected");
        console.log(response.data["username"]);
        zSetUsername(response.data["username"]);
        zSetUserID(response.data["user_id"]);
        zcheck("connected");
      } else {
        console.log("Is not connected");
        console.log(response.data);

        zcheck("anonymous");
        zSetUsername("anonymous");
      }
    })
    .catch((error) => {
      console.log("Is NOT connected");
      console.log(error);

      zcheck("anonymous");
      zSetUsername("anonymous");
    });
};

export { IsConnectedShort, IsConnectedShortWithID };
