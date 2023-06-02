import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupedButtons from "./GroupedButtons";

const BooksTable = ({ loggedInAsUser, loggedInAsAdmin }) => {
  console.log("loggedInAsUser: ", loggedInAsUser);
<<<<<<< HEAD
=======
  const userData = JSON.parse(sessionStorage.getItem("userData"));
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412

  const [booksData, setBooksData] = useState(null);
  const [booksError, setBooksError] = useState("");

  const getData = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get("http://localhost:3000/library/books");
      setBooksData(response.data);
=======
      const response = await fetch("http://localhost:3000/library/books");
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      const data = await response.json();
      setBooksData(data.books);
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
    } catch (error) {
      setBooksError(error.message);
    }
  };

<<<<<<< HEAD
  const handleEdit = async () => {
    console.log("edit");
  };

  const handleDelete = async () => {
    console.log("delete");
=======
  const handleEdit = async (book) => {
    const data = JSON.stringify({ book });

    fetch("http://localhost:3000/library/books", {
      method: "POST",
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

  const handleDelete = async (book) => {
    const data = JSON.stringify({ title: book });
    console.log(data);

    fetch("http://localhost:3000/admin/books", {
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
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
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
                    Author
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography component="h1" variant="h5">
                    Quantity
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography component="h1" variant="h5">
                    Title
                  </Typography>
                </TableCell>
                {(loggedInAsUser || loggedInAsAdmin) && (
                  <TableCell align="left">
<<<<<<< HEAD
                    <Typography component="h1" variant="h5">
=======
                    <Typography component="h1" variant="h5" inputProps={{ "data-testid": "order-row"}}>
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
                      Order
                    </Typography>
                  </TableCell>
                )}
                {loggedInAsAdmin && (
                  <TableCell align="left">
                    <Typography component="h1" variant="h5">
                      Action
                    </Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
<<<<<<< HEAD
              {booksData.books.map((book) => (
                <TableRow key={book.author}>
=======
              {booksData.map((book) => (
                <TableRow key={book.author} disabled={true}>
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
                  <TableCell component="th" scope="row">
                    {book.author}
                  </TableCell>
                  <TableCell align="left">{book.quantity}</TableCell>
                  <TableCell align="left">{book.title}</TableCell>
                  {(loggedInAsUser || loggedInAsAdmin) && (
                    <TableCell align="left">
                      <GroupedButtons />
                    </TableCell>
                  )}
                  {loggedInAsAdmin && (
                    <TableCell align="left">
                      <Button onClick={handleEdit}>Edit</Button>
<<<<<<< HEAD
                      <Button onClick={handleDelete}>Delete</Button>
=======
                      <Button onClick={() => handleDelete(book.title)}>
                        Delete
                      </Button>
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
                    </TableCell>
                  )}
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
      {booksError && <p>Error: {booksError}</p>}
      {booksData && <DisplayTable />}
    </div>
  );
};

export default BooksTable;
