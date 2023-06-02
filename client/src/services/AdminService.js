<<<<<<< HEAD
// import {admin} from './http-common';

// getAllUsers(token) {
//     const headers = {
//         "Content-type": "application/json",
//         "authorization": `${token.accessToken}`
//     }
// }
=======
const promoteUser = (data, token) => {
    fetch("http://localhost:3000/admin/users", {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            authorization: token,
        },
        body: data,
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === undefined) {
        alert("Failed");
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error(error);
    });

}

const deleteUser = (data, token) => {
    fetch("https://localhost:3000/admin/users", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            authorization: token,
        },
        body: data,
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === undefined) {
        alert("Failed");
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default { promoteUser, deleteUser }
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
