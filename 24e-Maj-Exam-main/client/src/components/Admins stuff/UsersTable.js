import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
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
      const response = await axios.get(
        "http://localhost:3000/admin/users",
        config
      );
      setUsersData(response.data.users);
    } catch (error) {
      setUsersError(error.message);
    }
  };

  const handlePromote = async (user) => {

    fetch('http://localhost:3000/admin/users', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === undefined){
        alert("Failed")
      }
      else{
        alert(data.message)
      }
    })
    .catch((error) => {
      console.error(error)
    })
  };

  const handleDelete = async () => {
    console.log("delete");
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayTable = () => {
    return (
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "white",
        }}
      >
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
            // justifycontent: "space-between",
          }}
        >
          <TextField id="outlined-basic" label="Search" variant="outlined" />
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  </TableCell>
                  <TableCell align="left">{user.role}</TableCell>
                  <TableCell align="left">1</TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handlePromote(user)}>Promote</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
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
