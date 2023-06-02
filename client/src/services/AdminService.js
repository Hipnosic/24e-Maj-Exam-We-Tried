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
};

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
};

export default { promoteUser, deleteUser };
