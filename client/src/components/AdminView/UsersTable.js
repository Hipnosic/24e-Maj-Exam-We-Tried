import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import GroupedButtons from "./Books/GroupedButtons";

const UsersTable = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const [usersData, setUsersData] = useState(null);
  const [usersError, setUsersError] = useState("");

  // TODO:  Token ska hämtas dynamiskt från userData
  const getData = async () => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + userData.token,
        },
      };

      const response = await fetch("http://localhost:3000/admin/users", config);
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
      const data = await response.json();
      setUsersData(data.users);
    } catch (error) {
      setUsersError(error.message);
    }
  };

  const handlePromote = async (username) => {
    const data = JSON.stringify({ username });

    fetch("http://localhost:3000/admin/users", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        authorization: userData.token,
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

  const handleDelete = async (username) => {
    const data = JSON.stringify({ username });

    fetch("http://localhost:3000/admin/users", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: userData.token,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === undefined) {
          alert("Failed");
        } else {
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayTable = () => {
    return (
      <>
        <Box
          sx={{
            bgcolor: "lightgrey",
            boxShadow: 3,
            borderRadius: 2,
            // px: 50,
            py: 2,
            marginTop: 2,
            marginBottom: 4,
            marginLeft: 6,
            marginRight: 6,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
            // justifycontent: "space-between",
          }}
        >
          <TextField id="outlined-basic" label="Search" variant="outlined" 
            sx={{
              '& label.Mui-focused': {
                color: 'black',
              },
              "& .MuiOutlinedInput-root": {
                '&.Mui-focused fieldset': {
                  borderColor: '#F07C29',
                },
              }
            }}
          />
        </Box>

        <Box
          sx={{
            bgcolor: "lightgrey",
            boxShadow: 3,
            borderRadius: 2,
            // px: 50,
            py: 2,
            marginTop: 2,
            // marginBottom: 4,
            marginLeft: 6,
            marginRight: 6,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifycontent: "space-between",
          }}
        >
          <Table
            data-testid="user-table"
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography component="h1" variant="h5">
                    Username
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography component="h1" variant="h5">
                    Role
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography component="h1" variant="h5">
                    Purchases
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography component="h1" variant="h5">
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData.map((user) => (
                <TableRow key={user.username}>
                  <TableCell component="th" scope="row">
                    {user.username}
                    {user.username === userData.name && " (Logged in user)"}
                  </TableCell>
                  <TableCell align="left">{user.role}</TableCell>
                  <TableCell align="left">1</TableCell>
                  <TableCell align="left">
                    <PrimaryButton
                      variant="contained"
                      sx={{m: 2}}
                      disabled={user.username === userData.name}
                      onClick={() => handlePromote(user.username)}
                      data-testid="promoteButton"
                    >
                      Promote
                    </PrimaryButton>
                    <PrimaryButton
                      variant="contained"
                      disabled={user.username === userData.name}
                      onClick={() => handleDelete(user.username)}
                      data-testid="deleteButton"
                    >
                      Delete
                    </PrimaryButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </>
    );
  };

  return (
    <div>
      {usersError && <p>Error: {usersError}</p>}
      {usersData && <DisplayTable />}
    </div>
  );
};

export default UsersTable;
